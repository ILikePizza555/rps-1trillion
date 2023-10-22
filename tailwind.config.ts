import type { Config } from 'tailwindcss';
import typographyPlugin from '@tailwindcss/typography';
import daisyUi from 'daisyui';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	daisyui: {
		themes: ['light'],
	},
	safelist: [
		{pattern: /(bg|border)-(blue|sky|orange|red)-(100|200|300|400|500)/},
	],
	plugins: [
		typographyPlugin,
		daisyUi,
	],
};
export default config;
