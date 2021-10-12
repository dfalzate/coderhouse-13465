const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const dev = {
	mode: 'development',
	devServer: {
		port: 3000,
		open: true,
	},
}

module.exports = merge(common, dev)
