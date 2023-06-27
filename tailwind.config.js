/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/App.js",
    "./src/index.js",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/pages/Home.js",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["autumn"],
  },
};
