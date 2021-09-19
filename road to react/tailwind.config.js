module.exports = {
	purge: ['./src/**/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'media', // or 'media' or 'class'
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
			boxShadow: {
				sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
				DEFAULT:
					'0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
				md: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.18)',
				lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
				xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
				'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
				'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
				inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
				none: 'none',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
