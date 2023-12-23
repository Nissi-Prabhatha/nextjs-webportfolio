/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
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
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
      // Updated color names according to Tailwind CSS v2.2 and v3.0
      sky: colors.sky, // replaces 'lightBlue'
      stone: colors.stone, // replaces 'warmGray'
      neutral: colors.neutral, // replaces 'trueGray'
      gray: colors.gray, // replaces 'coolGray'
      slate: colors.slate, // replaces 'blueGray'
    },
  },
  plugins: [],
};
