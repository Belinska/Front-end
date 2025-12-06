const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: { path: path.resolve(__dirname, "dist"), filename: "bundle.js", clean: true },
  devtool: "eval-source-map",
  module: {
    rules: [
      { test: /\.s[ac]ss$/i, use: ["style-loader","css-loader",{ loader: "sass-loader", options: { implementation: require("sass") } }] },
      { test: /\.css$/i, use: ["style-loader","css-loader"] },
      { test: /\.js$/i, exclude: /node_modules/, use: { loader: "babel-loader", options: { presets: [["@babel/preset-env"]] } } }
    ]
  },
  plugins: [ new HtmlWebpackPlugin({ template: "./src/index.html" }) ],
  devServer: { port: 8080, hot: true, open: true, watchFiles: ["src/**/*"] },
  resolve: { extensions: [".js",".json"] },
};
