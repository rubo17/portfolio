/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        main: '#181818',
        secondary: '#1F1F1F',
        primaryText: '#C4C8D1',
        accent: '#7FDBFF', 
        skillColor: '#292939'
      },
    },
  },
  plugins: [],
};
