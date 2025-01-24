/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8c00ff",

          "primary-content": "#e5d9ff",

          secondary: "#f90000",

          "secondary-content": "#150000",

          accent: "#00c0ff",

          "accent-content": "#000e16",

          neutral: "#181818",

          "neutral-content": "#cbcbcb",

          "base-100": "#1c2a37",

          "base-200": "#17232e",

          "base-300": "#121c26",

          "base-content": "#ccd0d3",

          info: "#00e6ff",

          "info-content": "#001316",

          success: "#009e41",

          "success-content": "#000901",

          warning: "#e1bb00",

          "warning-content": "#120d00",

          error: "#ff6f88",

          "error-content": "#160406",
        },
      },
    ],
  },
};
