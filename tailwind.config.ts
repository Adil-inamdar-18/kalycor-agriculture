import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        humus: "#1F1912",
        forest: {
          950: "#0F2417",
          900: "#17361F",
          800: "#1F4A2B",
          700: "#2B6238",
        },
        leaf: { DEFAULT: "#5E9B3A", light: "#8BC34A" },
        sprout: "#B5D86A",
        wheat: { DEFAULT: "#D9B65A", deep: "#9C7A27" },
        paper: "#F5F7F0",
        mist: "#E6EBDC",
        stone: "#5B6355",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', "Georgia", "serif"],
        sans: ['"Public Sans Variable"', "system-ui", "sans-serif"],
      },
      maxWidth: { page: "1320px" },
      transitionTimingFunction: { out: "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
  plugins: [],
};
export default config;
