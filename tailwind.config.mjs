/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'soft-red': 'hsl(7, 99%, 70%)',
				'yellow': 'hsl(51, 100%, 49%)',
				'dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
				'dark-blue': 'hsl(198, 62%, 26%)',
				'dark-moderate-cyan': 'hsl(168, 34%, 41%)',
				'very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
				'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
				'dark-grayish-blue': 'hsl(232, 10%, 55%)',
				'grayish-blue': 'hsl(210, 4%, 67%)',
				'blue': 'hsl(200, 100, 62%)',
			},
			backgroundColor: {
				'soft-red': 'hsl(7, 99%, 70%)',
				'yellow': 'hsl(51, 100%, 49%)',
				'dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
				'dark-blue': 'hsl(198, 62%, 26%)',
				'dark-moderate-cyan': 'hsl(168, 34%, 41%)',
				'very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
				'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
				'dark-grayish-blue': 'hsl(232, 10%, 55%)',
				'grayish-blue': 'hsl(210, 4%, 67%)',
				'blue': 'hsl(200, 100, 62%)',
			},
			fontFamily: {
				'fraunces': ['Fraunces', 'serif'],
				'barlow': ['Barlow', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
