const path = require('path');

module.exports = {
  // watch: true, // Watch for changes and auto-reload
  mode: 'production', // Production mode
  entry: './src/index.js',
  output: {
    filename: 'app.js', // Output filename
    path: path.resolve(__dirname, 'build'), // Output path
  },
  devtool: 'cheap-module-eval-source-map', // Source map (debugging)
  // Plugins
  module: {
    rules: [
      {
        test: /\.m?js$/, // File match regex
        exclude: /(node_modules|bower_components)/, // Exclusion regex
        use: {
          loader: 'babel-loader', // Plugin
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
    ],
  },
};
