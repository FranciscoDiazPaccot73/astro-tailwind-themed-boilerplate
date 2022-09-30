const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./src/pages/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}',
		'./src/components/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}',
		'./src/layouts/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'
	],
	theme: {
		extend: {
			colors: {
				primary: colors.blue,
				secondary: colors.pink,
			},
			fontFamily: {
				sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class',
};
