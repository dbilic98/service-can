/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#F2F2F2",
        turquoise: "#36a3ba",
        darkTurquoise: "#2b8494",
      },
    },
  },
  plugins: [],
};
