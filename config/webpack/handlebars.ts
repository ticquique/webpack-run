import {Rule} from 'webpack';

export const rule: Rule = {
  test: /\.handlebars$/,
  loader: 'handlebars-loader',
  exclude: /node_modules/
}

export default {
  rule: rule,
}
