/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      bgImg: {
        'hero-pattern': "url('https://img.freepik.com/vector-gratis/vehiculo-isometrico_24877-50903.jpg?w=2000')",
      }
    },
  },
  plugins: [],
}
