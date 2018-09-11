var path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractPlugin = new ExtractTextPlugin('style.css');

var HtmlWebPackPlugin = require("html-webpack-plugin");
var htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "index.html"
});

module.exports = {
     entry: './src/index.js',
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'main.js'
     },
     module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
            {
				test:/\.(s*)css$/,
				use: extractPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: "css-loader",
						},
						{ loader: "sass-loader", options: { sourceMap: true } }
					]
				})
            }

		]//Rules end;
     },
	 plugins: [htmlPlugin,extractPlugin],
     stats: {
         colors: true
     },
     devtool: 'source-map'
};