import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FFF",
        background: "#13141f",
      },
    },
  },
  plugins: [],
};

export default config;
