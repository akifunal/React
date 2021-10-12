const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'),

			// Folders
			'@components': path.resolve(__dirname, 'src/components'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@helper': path.resolve(__dirname, 'src/helpers'),

			// Components
			'@App': path.resolve(__dirname, 'src/components/App'),
			'@List': path.resolve(__dirname, 'src/components/List'),
			'@Item': path.resolve(__dirname, 'src/components/List/Item'),
			'@SearchForm': path.resolve(__dirname, 'src/components/SearchForm'),
			'@InputWithLabel': path.resolve(
				__dirname,
				'src/components/InputWithLabel'
			),
		},
	},
	style: {
		postcss: {
			plugins: [require('tailwindcss'), require('autoprefixer')],
		},
	},
};
