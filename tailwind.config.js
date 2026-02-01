/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        panel: "#0b0b0f",
        borderSoft: "rgba(255,255,255,0.15)",
        neonGreen: "#00ff9c",
        neonCyan: "#00eaff",
      },
      boxShadow: {
        neon: "0 0 20px rgba(0,255,156,0.25)",
        neonStrong: "0 0 35px rgba(0,255,156,0.45)",
      },
    },
  },
  plugins: [],
};
