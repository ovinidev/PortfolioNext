import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.tsx"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#FFF",
			},
		},
	},
	plugins: [],
};

export default config;
