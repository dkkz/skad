// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  entry: './src/skip.ts',
  // devtool: 'inline-source-map',
  mode: 'production',
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.ts', '.js'],
  },
  output: {
    filename: 'skip.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
