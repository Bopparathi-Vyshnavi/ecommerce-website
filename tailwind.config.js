/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about-image': "url('../assets/Images/about-img1.jpg')",
      }
    },
  },
  plugins: [],
}
