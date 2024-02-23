const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  // devtool: 'evel-'

  entry: {

    main: './src/index.tsx'

  },
  output: {
    path: path.resolve(__dirname, '../../dist')
  },

  target: 'web',
  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js"],
    modules: [path.resolve(__dirname, "./.browserslistrc"), "node_modules"],
    alias: {
      '@Img': path.resolve(__dirname, 'src/img'),
      '@Root': path.resolve(__dirname, 'src/interfaces.ts'),
      '@Pages': path.resolve(__dirname, 'src/components/pages'),
      '@Attribute': path.resolve(__dirname, 'src/components/site')
    }
  },
  module: {
    rules: [
      {
        test: /\.(tsx|jsx|ts|js)$/,

        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(__dirname, './babel.config.js'),
            }
          },
        ],

        exclude: [
          // path.resolve(__dirname, "./src/backend")
        ]

      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],

      },
      {
        test: /\.(png|jpe?g|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        }
        // loader: 'file-loader',
      },
    ],
  },
  plugins: [
    // new TsconfigPathsPlugin()
  ],
  watchOptions: {
    ignored: [
      "node_modules",
      "**/node_modules"
    ]
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../../dist'),

    },

    watchFiles: [
      './src/frontend/src'
    ],

    compress: true,
    historyApiFallback: true,
    open: true,
    // port: 8080
  }

};
