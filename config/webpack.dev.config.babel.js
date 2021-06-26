import config from './common.config';
import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.base.config.babel';

const paths = config.paths;
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    // does'nt use contenthash or chunkhash in development, because it can not be changed.
    filename: '[name]-[chunkhash].js',
  },
  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    host: '0.0.0.0',
    //disableHostCheck: true,
    port: 8000,
    //historyApiFallback: true,
    hot: true,
    liveReload: true,
    compress: true,
  },
});
