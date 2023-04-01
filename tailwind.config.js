/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
    'sans': ['ui-sans-serif', 'system-ui'],
    'serif': ['ui-serif', 'Georgia'],
    'mono': ['ui-monospace', 'SFMono-Regular'],
    'poppins': ['Poppins'],
    'dmsans': ['DM Sans', 'sans-serif']
     },
    colors: {
      'regal-blue': '#243c5a',
      'titles': '#F9F9F9',
      'content' : '#828282',
      'purple-content' : '#8257E6',
    },

    extend: {},
  },
  plugins: [],
}
