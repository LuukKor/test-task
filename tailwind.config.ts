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
				gray: {
					200: "#EAECF0",
					300: "#D0D5DD",
					400: "#667085",
					500: "#475467",
					600: "#344054",
					700: "#101828",
				},
				violet: {
					400: "#7F56D9",
					500: "#6941C6",
				},
			},
			boxShadow: {
				DEFAULT: "0px 1px 2px 0px #1018280D",
			},
		},
	},
	plugins: [],
} satisfies Config;
