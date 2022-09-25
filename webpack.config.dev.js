const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
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
      filename: "./index.html"
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/actividades/descuentos.html",
      filename: "./actividades/descuentos.html"
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/actividades/figuras.html",
      filename: "./actividades/figuras.html"
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/actividades/mediana.html",
      filename: "./actividades/mediana.html"
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/actividades/moda.html",
      filename: "./actividades/moda.html"
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/actividades/promedio.html",
      filename: "./actividades/promedio.html"
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/actividades/salario.html",
      filename: "./actividades/salario.html"
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].css"
    })
  ]
}