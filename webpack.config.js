const path = require('path');

module.exports = {
  watch: true,
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build'),
  },
};
