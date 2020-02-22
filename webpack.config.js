// const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  // devtool: 'source-map',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'main.js',
    library: 'ReactQuickSettings',
    libraryTarget: 'umd',
    publicPath: '/dist/',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: 'html-loader',
      //     },
      //   ],
      // },
    ],
  },
  // plugins: [
  //   new HtmlWebPackPlugin({
  //     template: './src/index.html',
  //     filename: './index.html',
  //   }),
  // ],

  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
};
