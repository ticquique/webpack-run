import { Rule } from "webpack";
const env = process.env;
const devMode = env && env.NODE_ENV !== "production";

export const rule: Rule = {
  test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
  use: [
    {
      loader: "file-loader",
      options: {
        name: devMode ? "[path][name].[ext]" : "[hash].[ext]",
        outputPath: "fonts"
      }
    }
  ]
};

export default {
  rule: rule
};
