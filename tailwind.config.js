/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./public/*.js"],
  theme: {
    extend: {
      fontFamily: {
        kumbh_sans: ["Kumbh Sans", "sans-serif"]
      },
      colors: {
        // primary text
        very_dark_desaturated_blue: "hsl(238, 29%, 16%)",
        soft_red: "hsl(14, 88%, 65%)",
        // background gradient
        soft_violet: "hsl(273, 75%, 66%)",
        soft_blue: "hsl(240, 73%, 65%)",
        // neutral text
        very_dark_grayish_blue: "hsl(237, 12%, 33%)",
        dark_grayish_blue: "hsl(240, 6%, 50%)",
        // dividers
        light_grayish_blue: "hsl(240, 5%, 91%)",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}

