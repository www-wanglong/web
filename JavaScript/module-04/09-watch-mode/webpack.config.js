const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  devServer: {
    contentBase: './public',
    proxy: {
      '/api': {
        target: 'https://api.github.com',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.png$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024 // 10 KB
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 用于生成 index.html
    new HtmlWebpackPlugin({
      title: 'Webpack Tutorials',
      meta: {
        viewport: 'width=device-width'
      },
      template: './src/index.html'
    }),
    // 开发阶段最好不要使用这个插件
    // new CopyWebpackPlugin([
    //   // 'public/**'
    //   'public'
    // ])
  ]
}
