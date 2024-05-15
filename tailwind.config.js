/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "close-menu":"url('/public/cerrar.svg')",
        "open-menu": "url('/public/menu.svg')"
      }
    },
  },
  plugins: [],
}

