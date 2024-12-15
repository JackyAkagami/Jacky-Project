import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent : "#0989FF"
        topHeadingPrimary: "#010f1c"
        TopHeadingSecondary: "#021d35"
        Pink: "#FD4B6B"
      }
    },
  },
  plugins: [],
} satisfies Config;
