/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'register-bg': "url('/RegisterBG.png')",
      },
    },
  },
  plugins: [],
};
