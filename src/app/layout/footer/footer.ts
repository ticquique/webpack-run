import "./footer.scss";
import footerLayout from "./footer.handlebars";

const context = {};

export const footer = document.createElement("div");

footer.innerHTML = footerLayout(context);
