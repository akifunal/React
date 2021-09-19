module.exports = {
	purge: ['./src/**/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				black: '#000000',
				cornflower: {
					default: '#8ec6eb',
					medium: '#b1d7f1',
					light: '#e5f2fa',
				},
				'steel-blue': {
					default: '#4b89b3',
					dark: '#162a39',
				},
				white: {
					default: '#ffffff',
					'transparent-10': 'rgba(255 255 255 / 10%)',
				},
			},
			fontFamily: {
				primary: ['"Noto Serif"', 'serif'],
				secondary: ['"Quattrocento Sans"', 'sans-serif'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
