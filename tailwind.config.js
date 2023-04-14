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
    screens: {
      'sm': {'max': '640px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min':'768px', 'max': '980px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
