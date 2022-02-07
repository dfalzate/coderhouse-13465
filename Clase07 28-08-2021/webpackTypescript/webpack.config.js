const path = require('path')

module.exports = {
	mode: 'production',
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.ts?/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	target: 'node',
}
