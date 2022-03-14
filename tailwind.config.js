module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "brand-blue": {
          400: "#1992d4",
          600: "#126694"
        }
      },
      spacing: {
        '72': '18rem'
      }
    },
  },
  plugins: [],
};
