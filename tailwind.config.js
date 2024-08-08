/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about-image': "url('src/assets/Images/about-img1.jpg)",
        'contimg': "url('src/assets/Images/contact-img.webp')",
      }

    },
  },
  plugins: [],
  
}
