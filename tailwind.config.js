/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    fontFamily: {
      fontTheme: ['Josefin Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'background': 'hsl(235, 21%, 11%)',
      },
    },
  },
  plugins: [require("daisyui")],
}
