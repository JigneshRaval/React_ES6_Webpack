var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'main.jsx'),
    output: {
        path: __dirname,
        filename: 'bundle.js'
	},
    module: {
        loaders: [
            {
                loader: 'babel-loader',
				exclude: /(node_modules|bower_components)/,
                test: /\.jsx?$/,
                query: {
					presets: ['es2015','react']
				},
			}
		]
	},
    stats: {
        // Nice colored output
       // colors: true
	},
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
