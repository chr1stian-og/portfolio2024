/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        black: "#000", // Set the background color to black
      },
    },
  },
  plugins: [require("daisyui")],
};
