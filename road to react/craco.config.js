const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@Components': path.resolve(__dirname, 'src/Components'),
			'@Hooks': path.resolve(__dirname, 'src/Hooks'),
			'@App': path.resolve(__dirname, 'src/Components/App'),
			'@List': path.resolve(__dirname, 'src/Components/List'),
			'@Item': path.resolve(__dirname, 'src/Components/List/Item'),
			'@InputWithLabel': path.resolve(
				__dirname,
				'src/Components/InputWithLabel'
			),
			'@Hoc': path.resolve(__dirname, 'src/Components/Hoc'),
		},
	},
	style: {
		postcss: {
			plugins: [require('tailwindcss'), require('autoprefixer')],
		},
	},
};
