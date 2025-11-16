/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mcpPurple: "#c084fc", // depois ajustamos pro roxo certo do Figma
      },
      fontFamily: {
        montserrat: ["Montserrat", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
