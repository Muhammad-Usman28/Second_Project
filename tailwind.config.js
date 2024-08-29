/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        sans: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 4px 4px 0px #00000040',
      },
    },
  },
  plugins: [],
}
