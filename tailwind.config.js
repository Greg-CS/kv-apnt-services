/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-color": "#3E422E",
      "secondary-color": "#D6CDBD",
      "text-color": "#FCFCFC",
      "alt-text-color": "#212121",
      "accent-color": "#765029",
      "background-color": "#CCCFBA",
    },
    fontFamily: {
      "logo-text": ["Comfortaa"],
      "body-text": ["Montserrat"],
      "header-text": ["Comic Neue"],
    },
    fontWeight: {
      "m-wght": "400",
      "b-wght": "700",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3E422E",
          secondary: "#D6CDBD",
          accent: "#765029",
          neutral: "#212121",
          "text-color": "#B3B3B3",
          "dark-text-color": "#FFF",
        },
      },
      "dark",
      "cupcake",
    ],
  },
};
