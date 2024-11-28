/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#251e1d",
        secondary:"#8a7d7d",
        secondarylight:"#766565",
        grayproj:"#6E6E6E",
      },
      borderWidth: {
        '1.5': '1.5px',
      },
      spacing:{
        "51":"51px",
        "53":"57px",
        "29":"33px",
        "88":"88px",
        "0.6":"3px",
        "500":"500px",
      },
      fontSize:{
        "90":"90px",
        "24":"24px",
      },
    },
  },
  plugins: [],
}

