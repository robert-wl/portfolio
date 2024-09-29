/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        primary: "20px",
        "2xs": "0.625rem",
        "3xs": "0.5rem",
      },
      fontFamily: {
        "roboto-mono": ["Roboto Mono", "monospace"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        primary: "#2d323d",
        background: "#212832",
        "fill-primary": "#00ADB4",
      },
      textColor: {
        primary: "#00ADB4",
      },
      fill: {
        primary: "#00ADB4",
      },
      stroke: {
        primary: "#00ADB4",
      },
      borderColor: {
        primary: "#00ADB4",
      },
      boxShadow: {
        "primary-shiny": "0 0 32px rgba(0, 173, 180, 0.5)",
        "white-shiny": "0 0 32px rgba(255, 255, 255, 0.5)",
      },
      dropShadow: {
        primary: "0 0 32px rgba(0, 173, 180, 0.5)",
        white: "0 0 32px rgba(255, 255, 255, 0.5)",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "bob-up-down": "bob-up-down 1s infinite",
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
