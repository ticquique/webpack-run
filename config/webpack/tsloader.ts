import { Rule } from "webpack";

export const rule: Rule = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/
};

export default {
  rule: rule
};
