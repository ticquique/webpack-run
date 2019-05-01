import htmlWebpack from "html-webpack-plugin";
import packagejson from "../../package.json";

const env = process.env;
const prodMode: any = env.NODE_ENV === "production";

const meta = {
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
  // 'Content-Security-Policy':
  //     {'http-equiv': 'Content-Security-Policy', 'content': 'default-src https:'},
  "application-name": "Corre que no llegas!",
  "theme-color": env.MAIN_COLOR,
  description: packagejson.description,
  robots: "index,follow"
};

const htmlWebpackOptions: htmlWebpack.Config = {
  title: env.APP_TITLE,
  meta,
  hash: true,
  cache: true,
  minify: prodMode,
  template: "./src/app/index.html",
  filename: "index.html"
};

const loader = new htmlWebpack(htmlWebpackOptions);
export default loader;
