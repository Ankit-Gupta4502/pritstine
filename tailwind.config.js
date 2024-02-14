/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const defaultTheme = require("tailwindcss/defaultTheme");
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CA9050",
        secondary: "#071F34",
        gray:"#7F7F7F",
        body:"#FBFBFB"
      },
      backgroundColor: {
        'custom-color': 'rgba(7, 31, 52, 1)',
      },

    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xs: "1rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "2.25rem",
      }
    },
    screens: {
      xs: "400px",
      sm: "540px",
      md: "767px",
      lg: "984px",
      xl: "1200px",
    },
  },

  plugins: [
    plugin(function ({ addComponents }) {

      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen xl': {
            maxWidth: '1440px',
          },

        }
      })
    })
  ],
};

module.exports = config