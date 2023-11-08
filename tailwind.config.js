/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E282A",
        "primary-100": "#433E3F",
        "primary-300": "#292426",

        secondary: "#DC8850",
        "secondary-100": "#E09462",
        "secondary-300": "#c67a48",

        accent: "#A4CBB4",
        "accent-100": "#ADD0BC",
        "accent-300": "#94B7A2",

        neutral: "#EF9995",
        "neutral-100": "#F1A3A0",
        "neutral-300": "#D78A86",

        "base-100": "#E4D8B4",
        "base-300": "#D4BF87",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
