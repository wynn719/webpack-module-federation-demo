const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const { VueLoaderPlugin } = require('vue-loader');
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devtool:'eval-source-map',
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3003,
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    alias: {
       vue: 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "app3",
      filename: 'remoteEntry.js',
      remotes: {
        app4: "app4@['http://localhost:3004']/remoteEntry.js",
      },
      shared: ['vue']
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

