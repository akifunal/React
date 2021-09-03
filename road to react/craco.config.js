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
			'@Search': path.resolve(__dirname, 'src/Components/Search'),
		},
	},
};
