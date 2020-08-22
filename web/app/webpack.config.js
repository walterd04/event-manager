const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: [
      '@babel/polyfill',
      'whatwg-fetch',
      'intersection-observer',
      './src/index.tsx',
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({}),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [{ loader: 'ts-loader', options: { transpileOnly: true } }],
      },
      {
        test: /\.(js|jsx|mjs)$/,
        use: [{ loader: 'babel-loader?cacheDirectory=true' }],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        use: [{ loader: 'source-map-loader' }],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'css-loader' }],
      },
    ],
  },
};
