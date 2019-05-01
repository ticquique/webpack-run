import { Rule } from "webpack";
const env = process.env;
const devMode = env && env.NODE_ENV !== "production";

export const rule: Rule = {
  test: /\.(png|jpg|gif)$/,
  use: [
    {
      loader: "url-loader",
      options: {
        limit: 8192,
        fallback: "file-loader",
        name: devMode ? "[path][name].[ext]" : "[hash].[ext]",
        outputPath: "images"
      }
    }
  ]
};

export default {
  rule: rule
};
