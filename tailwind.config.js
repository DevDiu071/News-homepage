/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: "600px",
      // => @media (min-width: 640px) { ... }

      laptop: "800px",
      // => @media (min-width: 1024px) { ... }
      largeLaptop: "700px",

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: " hsl(36, 100%, 99%)",
      orange: "hsl(35, 77%, 62%)",
      red: "hsl(5, 85%, 63%)",
      darkgray: "hsl(236, 13%, 42%)",
      darkblue: " hsl(240, 100%, 5%)",
      lightgray: " hsl(233, 8%, 79%)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
