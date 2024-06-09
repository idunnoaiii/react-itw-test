/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ec3655',
        secondary: '#181818',
        primaryDark: '#831e2f',

        header: '#181818',
        background: '#181818',
        body: '#181818'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace']
      },
      fontSize: {
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '5rem',
        '6xl': '6rem'
      },
      zIndex: {
        dropdown: 1000,
        sticky: 1020,
        fixed: 1030,
        modalBackdrop: 1040,
        offcanvas: 1050,
        modal: 1060,
        popover: 1070,
        tooltip: 1080
      },
      lineHeight: {
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2'
      },
      letterSpacing: {
        tight: '-0.05em',
        normal: '0',
        wide: '0.05em'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
    // require('tailwindcss/line-clamp')
  ]
}
