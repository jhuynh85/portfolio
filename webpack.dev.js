const { merge } = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		historyApiFallback: true,
		static: "./dist",
		compress: true,
		hot: true,
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
});
