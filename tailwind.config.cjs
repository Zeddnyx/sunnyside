/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pop:  ['Poppins', 'sans-serif'],
      },
      fontSize: {
        sm: '18px',
      },
      colors: {
        SoftRed: 'hsl(7, 99%, 70%)',
        Yellow: 'hsl(51, 100%, 49%)',
        DarkDesaturated: 'hsl(167, 40%, 24%)', // design text
        DarkBlue: 'hsl(198, 62%, 26%)', //text
        DarkCyan: 'hsl(168, 34%, 41%)', // footer

        VeryDarkBlue: 'hsl(212, 27%, 19%)',
        VeryDarkGrayBlue: 'hsl(213, 9%, 39%)',
        DarkGrayBlue: 'hsl(232, 10%, 55%)',
        GrayishBlue: 'hsl(210, 4%, 67%)',
        White: 'hsl(0, 0%, 100%)'
      },
    },
  },
  plugins: [],
}
