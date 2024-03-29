var styleLintPlugin = require("stylelint-webpack-plugin");
var ESLintPlugin = require("eslint-webpack-plugin");
var path = require("path");

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
					},
				],
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "sass-loader" },
				],
			},
			{
				test: /\.(png|svg|jpg|gif|webp)$/,
				use: ["file-loader"],
			},
		],
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js",
	},
	plugins: [
		new styleLintPlugin({
			configFile: ".stylelintrc",
			context: "src",
			files: "**/*.scss",
			failOnError: false,
			quiet: false,
		}),
		new ESLintPlugin(),
	],
};
