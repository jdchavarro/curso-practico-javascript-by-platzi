const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: {
    index: './src/index.js',
    descuentos: './src/modules/descuentos.js',
    figuras: './src/modules/figuras.js',
    medidasTendenciaCentral: './src/modules/medidas_tendencia_central.js',
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "scripts/[name].js",
  },
  mode: "development",
  resolve: {
    extensions: [".js"],
    alias: {
      "@styles": path.resolve(__dirname, "src/styles"),
      "@images": path.resolve(__dirname, "src/assets/images")
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.png/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext][query]"
        }
      },
      {
        test: /\.(woff|woff2)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext][query]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/actividades/descuentos.html",
      filename: "./actividades/descuentos.html",
      chunks: ['index','descuentos']
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/actividades/figuras.html",
      filename: "./actividades/figuras.html",
      chunks: ['index','figuras']
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/actividades/medidas_tendencia_central.html",
      filename: "./actividades/medidas_tendencia_central.html",
      chunks: ['index','medidasTendenciaCentral']
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].css"
    })
  ]
}