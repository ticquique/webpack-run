import * as style from "./footer.scss";
import * as footerLayout from "./footer.handlebars";

const context = {};

export const footer = document.createElement("div");

footer.innerHTML = footerLayout(context);
