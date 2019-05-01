import autoprefixer from 'autoprefixer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import presetEnv from 'postcss-preset-env';
import {Rule} from 'webpack';

export const rule: Rule = {
  test: /\.(scss|css)$/,
  use: [
    'style-loader', MiniCssExtractPlugin.loader, 'css-loader', {
      loader: 'postcss-loader',
      options: {ident: 'postcss', config: {path: './'}, plugins: (_: any) => [presetEnv()]}
    },
    'sass-loader'
  ]
};

const options: MiniCssExtractPlugin.PluginOptions = {
  filename: 'style.[contenthash].css'
};

export const plugin = new MiniCssExtractPlugin(options);

export default {rule, plugin};
