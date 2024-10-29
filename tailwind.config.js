/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "flip-x": "flipX 0.9s ease-in-out",
        "flip-y": "flipY 0.9s ease",
      },
      keyframes: {
        flipX: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(180deg)", opacity: "100" },
        },
        flipY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(180deg)", opacity: "100" },
        },
      },
    },
    plugins: [],
  },
};
