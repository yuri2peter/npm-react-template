const path = require('path');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const rules = [
  {
    exclude: /node_modules/,
    test: /\.j|tsx?$/,
    use: {
      loader: 'babel-loader',
    },
  },
  {
    loader: require.resolve('arraybuffer-loader'),
    test: /\.bin$/,
  },
  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  },
];

module.exports = {
  devtool: 'source-map',
  entry: './src/index.ts',
  module: {
    rules,
  },
  plugins: [new WebpackCleanupPlugin()],
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, './dist'),
    sourceMapFilename: 'index.js.map',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  externals: {
    react: 'react',
  },
};
