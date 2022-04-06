const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          minimize: false,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
    open: true,
    watchFiles: ['src/**/*'],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackPwaManifest({
      icons: [
        {
          src: path.resolve('src/images/icon_256x256.png'),
          destination: path.join('images', 'icons'),
          sizes: [96, 128, 192, 256],
          type: 'image/png',
        },
      ],
      start_url: './index.html',
      display: 'standalone',
      theme_color: '#525352',
      filename: 'manifest.json',
      description: 'My awesome Progressive Web App!',
      name: 'MarkdownEditor',
      publicPath: './',
    }),
    new GenerateSW({
      swDest: path.resolve(__dirname, 'dist/sw.js'),
      maximumFileSizeToCacheInBytes: 5000000000,
      clientsClaim: true,
      skipWaiting: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      inject: 'body',
      minify: false,
    }),
  ],
};
