import dotenvpackage from "dotenv";
import { resolve } from "path";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
dotenvpackage.config({ path: `${__dirname}/.env` });

import { Configuration } from "webpack";
import i18languages from "./config/webpack/i18nconfig";
import htmlPlugin from "./config/webpack/htmlplugin";
// import faviconPlugin from './src/config/webpack/faviconconfig';
import { rule as hbbrule } from "./config/webpack/handlebars";
import { rule as urlloaderrule } from "./config/webpack/url-loader";
import {
  rule as sassrule,
  plugin as sassplugin
} from "./config/webpack/sassloader";
import { rule as fontrule } from "./config/webpack/fontloader";
import { rule as tsrule } from "./config/webpack/tsloader";
import { plugin as bundleAnalyzerPlugin } from "./config/webpack/bundle_analyzer";
import { plugin as optimizecssPlugin } from "./config/webpack/optimizecss";
import path from "path";

const env = process.env;
const devMode = env.NODE_ENV !== "production";

const devConfig = (lang: { language?: string; plugin: any }): Configuration => {
  return {
    entry: `./${env.APP_SRC}/index.ts`,
    output: {
      path: resolve(__dirname, "dist"),
      filename: "[name].[chunkhash].js"
    },
    module: { rules: [urlloaderrule, hbbrule, sassrule, fontrule, tsrule] },
    plugins: [
      sassplugin,
      htmlPlugin,
      lang.plugin,
      optimizecssPlugin,
      ...(devMode ? [bundleAnalyzerPlugin] : [])
      // faviconPlugin
    ],
    resolve: {
      extensions: [".ts", ".js"],
      plugins: [new TsconfigPathsPlugin({ configFile: "tsconfig.json" })],
      // modules: ['src', 'node_modules'],
      alias: {
        app: path.resolve(__dirname, "src/app"),
        assets: path.resolve(__dirname, "src/assets")
      }
    }
  };
};

module.exports = i18languages.map(val => devConfig(val));
