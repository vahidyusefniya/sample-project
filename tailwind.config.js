// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: "#F9F9F9",
      primary: "#007BEC",
      secondary: "#6c5ce7",
      accent: "#1FB2A5",
      neutral: "#2a323c",
      "base-25": "#353d47",
      "base-50": "#2a323c",
      "base-75": "#20272e",
      "base-100": "#1d232a",
      "base-200": "#191e24",
      "base-300": "#15191e",
      "base-content": "#A6ADBB",
      info: "#3abff8",
      success: "#36d399",
      warning: "#fbbd23",
      error: "#f87272",
      "gradient-first": "#34eaa0",
      "gradient-second": "#0fa2e9",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}