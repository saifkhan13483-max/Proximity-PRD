/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          primary: '#B8924A',
          light: '#D4AF72',
          dark: '#8B6A2E',
        },
        dark: {
          hero: '#0A0A0A',
          card: '#141414',
          charcoal: '#1A1A1A',
        },
        offwhite: '#F9F6F1',
        muted: '#6B6B6B',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #B8924A 0%, #D4AF72 50%, #8B6A2E 100%)',
        'dark-hero': 'linear-gradient(160deg, #0A0A0A 0%, #1a1308 100%)',
        'gold-glow': 'radial-gradient(ellipse at center, rgba(184,146,74,0.15) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(184,146,74,0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(184,146,74,0)' },
        },
      },
    },
  },
  plugins: [],
}
