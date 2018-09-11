var path = require('path');

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
				use:['style-loader','css-loader', 'sass-loader']
            }

		]//Rules end;
     },
	 plugins: [htmlPlugin],
     stats: {
         colors: true
     },
     devtool: 'source-map'
};