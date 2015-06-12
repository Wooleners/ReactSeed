module.exports = {
  entry:[
    './src/entry.js'
  ],
  output: {
    path: './build',
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['jsx?harmony']
      }
    ]
  }
};
