/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          main: "#0B0F1A",
        },
        neon: {
          cyan: "#22d3ee",
          green: "#00ff9c",
        },
      },
    },
  },
  plugins: [],
};
