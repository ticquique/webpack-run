import OptimizeCssAssetsPlugin from "optimize-css-assets-webpack-plugin";

const pluginOptions: any = {
  cssProcessor: require("cssnano"),
  cssProcessorPluginOptions: {
    preset: ["default", { discardComments: { removeAll: true } }]
  },
  canPrint: true
};

export const plugin = new OptimizeCssAssetsPlugin(pluginOptions);
export default { plugin };
