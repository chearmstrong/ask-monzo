const slsw = require('serverless-webpack');

module.exports = {
  entry: slsw.lib.entries,
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
      },
    }],
  },
  stats: 'minimal',
  target: 'node',
};
