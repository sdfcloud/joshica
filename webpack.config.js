const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'joshica.js',
      globalObject: 'this'
    },
    resolve: {
      extensions: ['.ts', '.js'],
      alias: {
        '@core': path.resolve(__dirname, 'src/core'),
        '@joshica/ux/core': path.resolve(__dirname, 'src/core.ts'),
        '@joshica/ux': path.resolve(__dirname, 'src/experiences'),
      }
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader',
              options: {
                injectType: 'singletonStyleTag',
                attributes: {
                  id: 'joshica-ux-experience-styles'
                }
              },
            },
            'css-loader',
            'sass-loader',
          ],
          exclude: /node_modules/
        }
      ]
    },
    mode: 'production'
  };
