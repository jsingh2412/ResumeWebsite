/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Roboto', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      fontSize:{
        "5xl": "1.75rem",
        "7xl": "2.25rem",
        "9xl": "3.5rem",
        "11xl": "5rem",
      },
      colors: {
        "black" : "#0A090C",
        "off-white" : "#F0EDEE",
        "midnight-green" : "#07393C",
        "caribbean-green" : "#2C666E",
        "light-blue" : "#90DDF0"
      },
      screens:{
        s: "480px",
        m: "768px",
        l: "1024px",
        xl: "1280px"
      }
    },
  },
  plugins: [],
}

