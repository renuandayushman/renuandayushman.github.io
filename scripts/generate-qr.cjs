const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');
const sharp = require('sharp');
const jsQR = require('jsqr');
const PNG = require('pngjs').PNG;

function getUrlFromWeddingData() {
  try {
    const fileContent = fs.readFileSync(path.resolve(__dirname, '../src/data/weddingData.ts'), 'utf8');
    const match = fileContent.match(/activeUrl:\s*["']([^"']+)["']/);
    if (match && match[1]) {
      return match[1];
    }
  } catch (e) {}
  return 'https://renu-ayushman.wedding/#rsvp-section';
}

// Default URL: Can be overridden via CLI argument or environment variable or weddingData.ts
// e.g.: node scripts/generate-qr.cjs "https://yourdomain.com/#rsvp-section"
const DEFAULT_URL = process.argv[2] || process.env.VITE_RSVP_URL || getUrlFromWeddingData();

const OUTPUT_DIR = path.resolve(__dirname, '../public/qr-codes');
const SRC_ASSETS_DIR = path.resolve(__dirname, '../src/assets/qr');

// Palette
const COLORS = {
  sage: '#4A5D4E',
  kasavuGold: '#C5A059',
  warmIvory: '#FAF7F2',
  darkCharcoal: '#222422',
  pureWhite: '#FFFFFF',
};

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Generate base SVG using qrcode library
async function createBaseSvg(url, darkColor, lightColor, margin = 3) {
  return QRCode.toString(url, {
    type: 'svg',
    errorCorrectionLevel: 'H',
    margin: margin,
    color: {
      dark: darkColor,
      light: lightColor || '#00000000', // transparent if not specified
    },
  });
}

// Add luxury Kerala monogram medallion to SVG
function addMonogramMedallion(svg, { darkColor = COLORS.sage, goldColor = COLORS.kasavuGold, bg = COLORS.warmIvory } = {}) {
  const vbMatch = svg.match(/viewBox=\"0 0 (\d+) (\d+)\"/);
  if (!vbMatch) return svg;

  const size = parseInt(vbMatch[1], 10);
  const center = size / 2;
  const radius = size * 0.125;

  const medallion = `
  <!-- Kerala Heritage Kasavu Monogram Medallion -->
  <g id="kerala-monogram-seal">
    <!-- Outer kasavu ring -->
    <circle cx="${center}" cy="${center}" r="${radius}" fill="${bg}" stroke="${goldColor}" stroke-width="0.75" />
    <!-- Inner dashed border -->
    <circle cx="${center}" cy="${center}" r="${radius - 0.7}" fill="none" stroke="${goldColor}" stroke-width="0.25" stroke-dasharray="0.6 0.35" />
    <!-- Soft center disc -->
    <circle cx="${center}" cy="${center}" r="${radius - 1.2}" fill="${bg}" />
    <!-- Monogram initials R & A -->
    <text x="${center}" y="${center + 0.35}" text-anchor="middle" dominant-baseline="central" font-family="'Cormorant Garamond', Georgia, serif" font-size="${radius * 0.62}" font-weight="700" fill="${darkColor}" letter-spacing="0.05em">R&amp;A</text>
  </g>
  `;

  return svg.replace('</svg>', medallion + '</svg>');
}

// Verify decodability with jsQR
function verifyPngBuffer(pngBuffer, expectedUrl, label) {
  try {
    const parsed = PNG.sync.read(pngBuffer);
    const code = jsQR(new Uint8ClampedArray(parsed.data), parsed.width, parsed.height);
    if (code && code.data === expectedUrl) {
      console.log(`  ✓ [VERIFIED SCANNABLE] ${label}`);
      return true;
    } else {
      console.warn(`  ⚠ [SCAN WARNING] ${label}: ${code ? code.data : 'Could not decode'}`);
      return false;
    }
  } catch (err) {
    console.error(`  ✕ [SCAN ERROR] ${label}:`, err.message);
    return false;
  }
}

async function generateAll() {
  const targetUrl = DEFAULT_URL;
  console.log(`\n======================================================`);
  console.log(`🌿 Generating Wedding Print-Ready QR Codes for RSVP:`);
  console.log(`   Target URL: "${targetUrl}"`);
  console.log(`======================================================\n`);

  await ensureDir(OUTPUT_DIR);
  await ensureDir(SRC_ASSETS_DIR);

  const variants = [
    {
      id: 'qr-classic-dark',
      name: 'Classic Dark Ink (Pure White Background)',
      description: 'Ideal for 100% foolproof scanning on high-contrast printing or digital cards.',
      dark: COLORS.darkCharcoal,
      light: COLORS.pureWhite,
      monogram: false,
    },
    {
      id: 'qr-classic-transparent',
      name: 'Classic Dark Ink (Transparent Background)',
      description: 'Perfect for printing directly onto physical textured cotton-rag or ivory stationery cards.',
      dark: COLORS.darkCharcoal,
      light: '', // transparent
      monogram: false,
    },
    {
      id: 'qr-kerala-sage',
      name: 'Kerala Sadya Sage (Warm Ivory Background)',
      description: 'Editorial wedding palette matching the Sadya Sage and deckled warm ivory theme.',
      dark: COLORS.sage,
      light: COLORS.warmIvory,
      monogram: false,
    },
    {
      id: 'qr-monogram-kasavu',
      name: 'Kasavu Gold & Sage with R&A Monogram',
      description: 'Luxury stationery edition featuring an embedded Kerala Kasavu gold seal in the center.',
      dark: COLORS.sage,
      light: COLORS.warmIvory,
      monogram: true,
    },
  ];

  const generatedFiles = [];

  for (const variant of variants) {
    console.log(`Processing: ${variant.name}...`);
    let svg = await createBaseSvg(targetUrl, variant.dark, variant.light || null, 4);

    if (variant.monogram) {
      svg = addMonogramMedallion(svg, {
        darkColor: variant.dark,
        goldColor: COLORS.kasavuGold,
        bg: variant.light || COLORS.warmIvory,
      });
    }

    // Save SVG file (Vector: infinite DPI, perfect for print shops / Illustrator)
    const svgPathPublic = path.join(OUTPUT_DIR, `${variant.id}.svg`);
    const svgPathSrc = path.join(SRC_ASSETS_DIR, `${variant.id}.svg`);
    fs.writeFileSync(svgPathPublic, svg, 'utf8');
    fs.writeFileSync(svgPathSrc, svg, 'utf8');

    // Render Ultra High-Res PNG (2048 x 2048 px at 300 DPI)
    const pngBuffer = await sharp(Buffer.from(svg))
      .resize(2048, 2048, { fit: 'contain', background: variant.light ? undefined : { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ quality: 100, compressionLevel: 9 })
      .toBuffer();

    const pngPathPublic = path.join(OUTPUT_DIR, `${variant.id}.png`);
    const pngPathSrc = path.join(SRC_ASSETS_DIR, `${variant.id}.png`);
    fs.writeFileSync(pngPathPublic, pngBuffer);
    fs.writeFileSync(pngPathSrc, pngBuffer);

    // Verify scannability on the high-res PNG
    verifyPngBuffer(pngBuffer, targetUrl, variant.id);

    generatedFiles.push({
      ...variant,
      svgFile: `/qr-codes/${variant.id}.svg`,
      pngFile: `/qr-codes/${variant.id}.png`,
      svgFullPath: svgPathPublic,
      pngFullPath: pngPathPublic,
    });
  }

  // Create an informative index manifest for the client and designer
  const manifest = {
    targetUrl,
    generatedAt: new Date().toISOString(),
    recommendation: {
      forLetterpressAndHotFoil: 'qr-classic-transparent.svg (Vector)',
      forCommercialPrinters: 'qr-classic-dark.svg or qr-monogram-kasavu.svg (Vector)',
      forCanvaAndPhotoshop: 'qr-monogram-kasavu.png or qr-classic-dark.png (2048x2048 px @ 300 DPI)',
    },
    variants: generatedFiles.map(f => ({
      id: f.id,
      name: f.name,
      description: f.description,
      svg: f.svgFile,
      png: f.pngFile,
    })),
  };

  fs.writeFileSync(path.join(OUTPUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');
  fs.writeFileSync(path.join(SRC_ASSETS_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');

  console.log(`\n🎉 Success! All print-ready QR codes created in:`);
  console.log(`   - public/qr-codes/`);
  console.log(`   - src/assets/qr/\n`);
}

generateAll().catch(err => {
  console.error('Failed to generate QR codes:', err);
  process.exit(1);
});
