/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'p-desaturated-red': 'hsl(0, 36%, 70%)',
				'p-soft-red': 'hsl(0, 93%, 68%)',
				'n-dark-grayish-red': 'hsl(0, 6%, 24%)'
			},
			fontFamily: {
				'josefin-sans': ['Josefin Sans', 'sans-serif']
			}
		}
	},
	plugins: []
};
