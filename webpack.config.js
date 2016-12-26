module.exports = {
  entry: {
    popup: ['babel-polyfill', './src/popup.js'],
    background: ['babel-polyfill', './src/background.js'],
    content: ['babel-polyfill', './src/content.js']
  },
  output: {
    path: './build',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /.json$/, loader: "json-loader" }
    ]
  }
};
