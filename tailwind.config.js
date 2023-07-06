/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: "hsl(179, 62%, 43%)",
          yellow: "hsl(71, 73%, 54%)",
        },
        neutral: {
          gray: "hsl(204, 43%, 93%)",
          blue: "hsl(218, 22%, 67%)",
        },
        extra: {
          cyan: "hsl(179.5, 47.2%, 51.8%)",
        },
      },
      fontFamily: {
        primary: ["'Karla'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
