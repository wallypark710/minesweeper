// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',

  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },

  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src')
    },
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'react-svg-loader'
          }
        ]
      }
    ]
  },

  devServer: {
    contentBase: './public',
    publicPath: '/dist',
    historyApiFallback: true
  }
};
