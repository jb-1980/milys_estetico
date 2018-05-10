const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

const pathsToClean = ["dist"]

var config = {
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ["babel-loader"],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.css?$/,
        loader: "style-loader!css-loader",
        include: __dirname,
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new CleanWebpackPlugin(pathsToClean),
    new HtmlWebpackPlugin({
      template: "src/menu/index.html",
      inject: false,
    }),
  ],
}

var menuConfig = Object.assign({}, config, {
  entry: "./src/menu/index",
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "bundle.[chunkHash].js",
  },
})

module.exports = [menuConfig]
