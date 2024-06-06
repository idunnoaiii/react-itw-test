/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3848a2',
        secondary: '#181818',

        header: '#121836',
        background: '#121836',
        body: '#121836'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      fontSize: {
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '5rem',
        '6xl': '6rem',
      },
      lineHeight: {
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
      },
      letterSpacing: {
        tight: '-0.05em',
        normal: '0',
        wide: '0.05em',
      },  
    },
  },
  plugins: [
    // require('tailwind-scrollbar'),
    // require('tailwindcss/line-clamp')
  ],
}