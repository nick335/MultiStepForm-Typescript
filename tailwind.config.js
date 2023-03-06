/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBodyBg: 'hsl(217, 100%, 97%)',
        white: 'hsl(0, 0%, 100%)',
        primaryHeaderColor: 'hsl(213, 96%, 18%)',
        BoxBg: 'hsl(231, 100%, 99%)',
        checkedColor: 'hsl(243, 100%, 62%)',
        currentHighlight: 'hsl(206, 94%, 87%)',
        errorColor: 'hsl(354, 84%, 57%)',
        borderColor: ' hsl(229, 24%, 87%)',
        textColor: 'hsl(231, 11%, 63%)',
        checking2: 'hsl(254, 31, 80)',
      },
      backgroundImage: {
        'mobile-bg': "url('src/assets/bg-sidebar-mobile.svg')",
        'desktop-bg': "url('src/assets/bg-sidebar-desktop.svg')"
      },
      fontFamily: {
        Ubuntu: ['Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [],
}
