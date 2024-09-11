// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: '#A7FF00',
        dark: '#000000',
        grayCustom: '#5c5a5a',
        cuscol: '#4D4D4D',
        he: '#CFCFCF'
      },
      borderWidth: {
        'custom': '1px', 
      },
    },
  },
  plugins: [],
}

