/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero' : "url('/img/intro3.jpeg')",
        "contact": "url('/img/contact.jpg')",
      }
    },
  },
  plugins: [],
};
