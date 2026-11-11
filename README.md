# Renu & Ayushman — Wedding Celebration & Guest Hub
### Punnamada Resort, Alleppey (Alappuzha), Kerala • January 30, 2027 (30.01.27)

A responsive, mobile-first wedding invitation and guest hub website crafted with an **editorial, layered physical stationery aesthetic**: translucent vellum overlays, delicate deckled borders, fine-line Kerala botanical & backwater illustrations, romantic serif typography, and an interactive guest experience.

---

## 🌿 Design Direction & Color Palette

- **Sadya Banana-Leaf Sage (`#4A5D4E`):** Represents sacred banana leaf feasts, lush coconut groves, and calm backwater tranquility.
- **Warm Ivory / Vellum Paper (`#FAF7F2`):** Mimics deckled luxury cotton-rag stationery and tactile card paper.
- **Antique Kasavu Gold (`#C5A059`):** Inspired by traditional Kerala Kasavu mundu/saree woven gold borders.
- **Terracotta Clay (`#B85D43`):** Earthy warmth of Kerala heritage tiled roofs and wax seals.
- **Deep Charcoal Ink (`#222422`):** Crisp editorial typography and ink signatures.

---

## ✨ Features & Sections

1. **The Vellum Envelope (Hero Section):**
   - Translucent vellum card with wax seal emblem (`R & A • 30.01.27`).
   - Romantic editorial typography: *Cormorant Garamond* & *Alex Brush*.
   - Live countdown timer to January 30, 2027 at 09:00 AM IST.
   - Ambient sound toggle button: Gentle Vembanad Lake ripples and serene acoustic drone via Web Audio API (0 external dependencies).

2. **The Day's Flow (Illustrated Interactive Timeline):**
   - Morning Temple Visit (07:30 AM)
   - Official Registration, Rings, Vows & Cake Cutting (11:00 AM)
   - Grand Kerala Sadya Feast (01:00 PM)
   - Lawn Games & Backwater Leisure (03:30 PM)
   - Lakeside Twilight Fireworks (06:15 PM)
   - Starlit Cocktail Dinner & Celebrations (07:30 PM – Late)
   - Interactive milestone accordion with attire guides and venue locations.

3. **The Venue & Stay (Punnamada Resort):**
   - Heritage Kerala villas, freshwater swimming pool, free bicycles, Ayurvedic spa, and private boat jetty.
   - Travel directions from Cochin International Airport (COK) and Alappuzha Railway Station (ALLP).
   - Embedded interactive Google Map and one-tap resort front desk dialer.

4. **Explore Alleppey ("Venice of the East"):**
   - Filterable categories: Kettuvallam & shikara cruises, Alappuzha & Marari beaches, historic temples & churches, and local backwater delicacies (Karimeen fry & filter coffee).

5. **"Who You'll Meet" & Guest Connection Hub:**
   - Filterable squad cards: The IISER Pune Squad, Bangalore Runners & Cult Crew, Kerala Home Team, Foodies & Board Gamers with conversation icebreakers.
   - **Kochi Airport Cab-Pool Matcher:** Guests landing at COK on Jan 28/29/30 can coordinate shared cabs directly.
   - **Wedding Trivia & Predictions Mini-Game:** 3 interactive questions with instant reveal stories.
   - **Cocktail Song Request Box:** Guests can submit favorite dance floor anthems for the DJ.

6. **"Who to Reach Out To" (Help Desk & Concierge):**
   - One-tap WhatsApp (`wa.me`) and direct `tel:` links for Bride's side, Groom's side, Girish Chettan (Cab Coordinator), and Punnamada front desk.

7. **Native RSVP Portal & Gift Note:**
   - Warm, poetic gift note (*"The most important gift to us is having you share in our special day..."*).
   - Multi-field state-validated RSVP capturing guest counts, event choices, travel dates, cab-pool opt-in, dietary notes, and blessings.
   - Celebratory confetti burst on submission.
   - **"Add to Google Calendar"** and **"Download Apple / Outlook (.ics)"** buttons pre-loaded with event details.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript + Vite 6
- **Styling:** Tailwind CSS 3.4 with custom vellum glassmorphism, paper noise textures, and gold shimmer gradients
- **Animations:** Framer Motion 12
- **Icons:** Custom SVG Kerala Line-Art Motifs (Houseboat, Nilavilakku lamp, rings, banana leaf, fireworks) + Lucide React
- **Confetti:** Canvas-Confetti

---

## 🚀 Quick Start (Running Locally)

```bash
# 1. Install dependencies
npm install

# 2. Start the Vite development server
npm run dev

# 3. Open your browser at http://localhost:5173
```

To build for production:
```bash
npm run build
npm run preview
```

---

## ⚙️ Customizing Content (`src/data/weddingData.ts`)

All wedding content, timings, phone numbers, and questions can be customized in a single central file:
[`src/data/weddingData.ts`](file:///Users/ayusingh17/Documents/WebWed/src/data/weddingData.ts).

You do not need to edit any UI components to change:
- Couple names and invitation messages
- Event schedule, timings, and attire dress codes
- Phone numbers for family points of contact and cab drivers
- Trivia questions and funny comments
- Google Apps Script Webhook URL

---

## 📋 Google Apps Script Setup (Zero-Cost Google Sheet RSVP Backend)

Follow these simple steps to connect the RSVP form to your own Google Sheet in 2 minutes:

1. Open [Google Sheets](https://sheets.new) and name the spreadsheet: **"Renu & Ayushman Wedding RSVPs"**.
2. Click on **Extensions > Apps Script** in the menu bar.
3. Replace any code in the editor with the entire content of [`google-apps-script.js`](file:///Users/ayusingh17/Documents/WebWed/google-apps-script.js).
4. Click the **Save** icon (disk icon).
5. Click **Deploy > New deployment** (top-right blue button).
6. Under *Select type* (gear icon), choose **Web app**.
7. Enter the following settings:
   - **Description:** `Wedding RSVP Webhook`
   - **Execute as:** `Me (your email)`
   - **Who has access:** `Anyone` *(Crucial so guests can submit RSVPs from the website without needing a Google login)*
8. Click **Deploy**, authorize permissions when prompted, and copy the **Web app URL** (ends with `/exec`).
9. Open [`src/data/weddingData.ts`](file:///Users/ayusingh17/Documents/WebWed/src/data/weddingData.ts) and paste the URL:
   ```ts
   rsvpConfig: {
     googleAppsScriptUrl: "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
     submitSuccessMessage: "We cannot wait to celebrate with you under the Kerala palms!",
   }
   ```
10. Test submitting an RSVP on your site — the row will instantly appear in your Google Sheet formatted with Sadya sage headers!

---

## 💌 Physical Invitation QR Code (Print-Ready Stationery)

Physical wedding invitations are printed once on paper and cannot be updated after distribution. To ensure the QR code never breaks before or after deployment:

1. **Vector SVG & 300 DPI PNG Files** are pre-generated in `public/qr-codes/`:
   - `qr-monogram-kasavu.svg` / `.png`: Luxury stationery edition with Kasavu gold border and embedded R&A monogram medallion (Error Correction Level H).
   - `qr-classic-dark.svg` / `.png`: High-contrast charcoal on pure white (commercial printer favorite).
   - `qr-classic-transparent.svg` / `.png`: Transparent background for printing directly on textured cotton-rag or hot-foil stamping.
   - `qr-kerala-sage.svg` / `.png`: Sadya Sage green on warm ivory paper.

2. **Regenerating with your production domain or dynamic link**:
   ```bash
   npm run generate-qr -- "https://your-domain.com/#rsvp-section"
   ```
   *Tip:* Use a dynamic redirect alias (e.g. `https://tinyurl.com/renu-ayushman-rsvp`) if you want the flexibility to change the destination URL anytime without reprinting your cards.
