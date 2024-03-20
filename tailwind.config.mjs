/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'desaturated-red': 'hsl(0, 36%, 70%)',
				'soft-red': 'hsl(0, 93%, 68%)',
				'dark-grayish-red': 'hsl(0, 6%, 24%)',
			},
			backgroundColor: {
				'desaturated-red': 'hsl(0, 36%, 70%)',
				'soft-red': 'hsl(0, 93%, 68%)',
				'dark-grayish-red': 'hsl(0, 6%, 24%)',
			},
			
		},
	},
	plugins: [],
}
