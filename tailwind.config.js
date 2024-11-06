/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-color': '#76757B' ,
        'bg-color': '#1F1B2E' ,
         'bg-userIcon': '#312B45'
      },
    },
  },
  plugins: [],
}
