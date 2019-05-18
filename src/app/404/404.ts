import "./404.scss";
import layout404 from "./404.handlebars";

export const error404Layout = document.createElement("div");
error404Layout.innerHTML = layout404();
