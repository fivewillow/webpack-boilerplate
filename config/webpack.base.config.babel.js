import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import  CopyWebpackPlugin  from 'copy-webpack-plugin';
import EslintWebpackPlugin from 'eslint-webpack-plugin';
import PrettierPlugin from 'prettier-webpack-plugin';
import config from './common.config';

console.log('config: ', config);
const { paths } = config;

module.exports = {
  entry: [`${paths.src}/index.ts`],
  target: ['web'],
  output: {
    filename: '[name].bundle.js',
    path: paths.build,
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: ['babel-loader'],
        exclude: [/node_modules/],
      },
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${paths.assets}`,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store','.gitkeep'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: `${paths.src}/index.html`,
    }),
    new EslintWebpackPlugin({
      files: ['.', 'src', 'config'],
      formatter: 'codeframe',
    }),
    new PrettierPlugin(),
  ],
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
    },
  },
};
