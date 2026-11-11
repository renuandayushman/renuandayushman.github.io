/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F2F5F3',
          100: '#E4ECE6',
          200: '#C8D8CC',
          300: '#9FB9A5',
          400: '#73957B',
          500: '#4A5D4E', // Sadya banana-leaf sage
          600: '#3D4D40',
          700: '#313E34',
          800: '#263028',
          900: '#1D241F',
        },
        vellum: {
          50: '#FFFFFF',
          100: '#FCFAF7',
          200: '#FAF7F2', // Warm ivory/vellum paper
          300: '#F4EFE6',
          400: '#EADFCF',
          500: '#DECDB5',
        },
        gold: {
          50: '#FAF6EE',
          100: '#F4ECD8',
          200: '#E9D7AF',
          300: '#DEC286',
          400: '#D2AD5E',
          500: '#C5A059', // Antique Kasavu gold
          600: '#A98442',
          700: '#866732',
          800: '#644C25',
          900: '#463419',
        },
        terracotta: {
          50: '#FAF2EF',
          100: '#F4E2DC',
          200: '#E8C2B6',
          300: '#D99E8D',
          400: '#C97C66',
          500: '#B85D43', // Terracotta clay
          600: '#9E4A32',
          700: '#7E3825',
          800: '#5F291A',
          900: '#421C11',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E5E6E5',
          200: '#C7C9C7',
          300: '#A3A6A3',
          400: '#6D716D',
          500: '#4A4E4A',
          700: '#2D302D',
          800: '#222422', // Deep charcoal ink
          900: '#151715',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        script: ['"Alex Brush"', '"Great Vibes"', 'cursive'],
        editorial: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'vellum': '0 4px 30px rgba(74, 93, 78, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
        'vellum-hover': '0 10px 40px rgba(74, 93, 78, 0.14), 0 2px 6px rgba(0, 0, 0, 0.06)',
        'gold-glow': '0 0 25px rgba(197, 160, 89, 0.25)',
      },
      backgroundImage: {
        'grain': "radial-gradient(circle at 50% 50%, rgba(197, 160, 89, 0.03) 0%, transparent 100%)",
      }
    },
  },
  plugins: [],
}
