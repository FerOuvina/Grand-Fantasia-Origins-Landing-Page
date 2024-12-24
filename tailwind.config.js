/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ramas: "#4f6582",
        hojas: "#736230",
        gf: "#5b380a",
        origins: "#57505c",
        background: "#b6b09a",
        navbar: "#4e4b44",
        button: "#ebebec",
        green: {
          500: "#22c55e", // Default Tailwind green
          600: "#16a34a", // Default Tailwind green hover
        },
        white: "#dbd8cd", // Custom white
      },
    },
  },
  plugins: [],
};
