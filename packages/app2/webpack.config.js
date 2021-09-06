const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devtool:'eval-source-map',
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3002,
  },
  output: {
    publicPath: "auto",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app2",
      filename: 'remoteEntry.js', // 远程入口
      exposes: { // 导出的普通模块
        './Shared': './src/shared.js',
        './LodashAlias': './src/lodash-alias.js', 
      },
      shared: ['lodash'], // 共用 vendor 
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

