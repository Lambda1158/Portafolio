/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "background":"#57375D",
        "letra":"#FFC8C8",
        "magenta":"#FF3FA4",
        "crema":"#FF9B82",

      },
      screens:{
        'sm': "640px",
        "lm":"1020px",
        "gm":"850px"
      },
      scale: {
        '140': '1.4',
        "130":"1.3"
      },
    },
  },
  plugins: [],
}
