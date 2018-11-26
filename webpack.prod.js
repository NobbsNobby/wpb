const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");


module.exports = {
  entry: "./src/js/index.js",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.pug/,
        loader: ['html-loader', 'pug-html-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-flow"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false
            }
          },
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new MiniCssExtractPlugin({
      filename: "css/style.min.css"
    }),
    new CopyWebpackPlugin([
      {
        from: "src/fonts",
        to: path.resolve(__dirname, "dist/fonts"),
        cache: true
      },
      {
        from: "src/img",
        to: path.resolve(__dirname, "dist/img"),
        cache: true
      }
    ]),
    new HtmlWebpackPlugin({
      template: "src/index.pug"
    }),
    // new FaviconsWebpackPlugin({
    //   logo: "./src/favicon/favicon.png",
    //   prefix: "icons/",
    //   icons: {
    //     android: true,
    //     appleIcon: true,
    //     appleStartup: false,
    //     coast: false,
    //     favicons: true,
    //     firefox: false,
    //     opengraph: false,
    //     twitter: false,
    //     yandex: false,
    //     windows: false
    //   }
    // }),
    // new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};
