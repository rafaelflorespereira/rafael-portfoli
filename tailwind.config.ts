import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      minWidth: {
        "3/4": "75%",
        "2/3": "66%",
      },
      minHeight: {
        "1/4-vh": "25vh",
      },
      backgroundSize: {
        transition: "1000% 100%",
      },
      keyframes: {
        glow: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        glow: "glow 4s ease-in-out 1",
      },
      colors: {
        primary: colors.slate,
        secondary: colors.cyan,
      },
    },
  },
  plugins: [],
};
export default config;
