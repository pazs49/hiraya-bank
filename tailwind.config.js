/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #6B21A8, #7E22CE, #9333EA)",
        "background-repeat": "no-repeat",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9F7AEA",

          secondary: "#6B46C1",

          accent: "#A3BFFA",

          neutral: "#2A4365",

          "base-100": "#1A202C",

          info: "#63B3ED",

          success: "#48BB78",

          warning: "#F6E05E",

          error: "#F56565",
        },
      },
    ],
  },
};
