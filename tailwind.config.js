/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#1B5E20',
        'fresh-grass': '#81C784',
        'soft-mint': '#A8E6CF',
        'earth-brown': '#6D4C41',
        'light-beige': '#EFEBE9',
      },
    },
  },
  plugins: [],
}