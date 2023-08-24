/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'#securepassword': '#ADD100',
				'#unsecurepassword': '#7B920A',
				'#betterblack': '#3e363f',
				'#triadic2': '#00ADD1',
				'#triadic3': '#D100AD'
			}
		}
	},
	plugins: []
};
