module.exports = {
  entry: './reverse-polish-calculator.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: './reverse-polish-calculator-test.js',
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
};
