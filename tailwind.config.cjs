/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			textColor: {
				'gradient': 'transparent',
			  },
			  // Define hover styles for gradient text
			  extend: {
				textColor: {
				  'gradient-hover': 'purple-blue-pink-gradient', // Replace with your gradient color class
				},
		},
	},
	},
	
	plugins: [],
}
