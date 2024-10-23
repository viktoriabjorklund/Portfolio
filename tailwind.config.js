/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      inset: {
        '17': '68px',
        '26': '104px'
      },

      padding: {
        '26': '104px'
      },

      margin: {
        '26': '104px'
      },

      colors: {
        'kth-blue': '#00005D',
        'trinity-blue': '#3471B4'
      },

      fontFamily: {
        'font': ['Ubuntu', 'sans-serif'],
      }

    },
    screens: {
      'xs': '480px',

      'sm': '640px',

      'md': '768px',

      'lg': '1024px', // laptop

      'xl': '1280px',

      '2xl': '1536px'
    },

    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },

  plugins: [],
}

