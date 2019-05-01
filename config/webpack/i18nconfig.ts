import I18nPlugin from "i18n-webpack-plugin";
import * as english from "./languages/en";

const languages = [
  { language: english.languaje, plugin: new I18nPlugin(english.translations) },
  { language: "es", plugin: new I18nPlugin(null) }
];

export default languages;
