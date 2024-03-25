/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        max: "1440px",
      },
      screens: {
        desktop: "1280px",
        tablet: "640px",
      },
      backgroundColor: {
        rstr: "#dc2626",
        cafe: "#c026d3",
        sght: "#f59e0b",
        mnmt: "#365314",
        hotl: "#3730a3",
      },
      boxShadow: {
        "left-line": "-1px 0px 0px rgb(212, 212, 212)",
        "under-line": "0px 1px 0px rgb(212, 212, 212)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
