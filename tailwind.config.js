/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        luckiest: ["Luckiest Guy", "cursive"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#efcf4f",
          secondary: "#c25934",
          accent: "#0c4b65",
          neutral: "#1B1820",
          "base-100": "#f7f5ef",
          info: "#9FC5E5",
          success: "#4DEADD",
          warning: "#B08611",
          error: "#F24A82",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
