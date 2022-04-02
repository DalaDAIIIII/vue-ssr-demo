const path = require('path')

module.exports = {
  devtool: '#source-map',
  entry: {
    app: './src/entry-client.js',
    // polyfill:'./public/static/polyfill.min.js',
    // bookjsEazy :'./public/static/bookjs-eazy.min.js',
    // bookConfig:'./public/static/bookConfig.js',
    vendor: [
      'vue',
      'vue-router',
      'vuex'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    alias: {
      'public': path.resolve(__dirname, '../public')
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false,
          postcss: [
            require('autoprefixer')({
              browsers: ['last 3 versions']
            })
          ]
        }
      },
      {
        test: /\.js$/,
        loader: 'buble-loader',
        exclude: /node_modules/,
        // presets:['es2015'],//生产环境需要用webpack.optimize.UglifyJsPlugin，写在这里不起作用，必须在.babelrc
        options: {
          objectAssign: 'Object.assign',
          plugins:[
            'syntax-dynamic-import',
            ["component", [
            {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
            }
            ]]
            ]
        },
        
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    },
    {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
    }
    ]
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  }
}
