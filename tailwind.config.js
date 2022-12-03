/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#EE4D47',
        secondary: '#FEF8F5',
        accent_primary: '#ED4D47',
        accent_secondary: '#FDEDE8',
        accent_black: '#402B2B',
        disclosure: '#FFF7F5',
        darkBlue: '#0F264C',
        accent_light: '#FCDDD4',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        dmSerif: ['DM Serif Display', 'serif'],
      },
    },
  },
  plugins: [],
};
