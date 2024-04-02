const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  // devtool: 'evel-'

  entry: {

    main: './src/index.tsx'

  },
  output: {
    path: path.resolve(__dirname, '../../dist'),
    publicPath: '/'
    /*
    './' - поулчаем '<script defer="" src="./main.js"></script>' НО! ошибка при F5 страниц (проекта) с динамической сылкой
    '/' - поулчаем '<script defer="" src="/main.js"></script>' Работает F5 страниц (проекта) с динамической сылкой
    */
  },

  target: 'web',
  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js", ".svg"],
    modules: [path.resolve(__dirname, "./.browserslistrc"), "node_modules", 'src'],
    alias: {
      '@img': path.resolve(__dirname, 'src/img'),
      '@svgs': path.resolve(__dirname, 'src/svgs'),
      '@reduxs': path.resolve(__dirname, './src/reduxs'),
      '@type': path.resolve(__dirname, 'src/interfaces.ts'),
			'@pages': path.resolve(__dirname, 'src/components/pages'),
			'@site': path.resolve(__dirname, 'src/components/site'),
      '@service': path.resolve(__dirname, 'src/services'),


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
        test: /\.(png|jpe?g)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        }
        // loader: 'file-loader',
      },
      {
        test: /\.svg$/i,
        use: ["@svgr/webpack", "@svgs/*"],
      }
    ],
  },
  plugins: [
    new TsconfigPathsPlugin()
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
