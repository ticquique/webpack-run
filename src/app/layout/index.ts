import "./footer/footer.scss";
import "./navbar/navbar.scss";

const navbarLayout = require("./navbar/navbar.handlebars")();
const footerLayout = require("./footer/footer.handlebars")();

export const navbar = document.createElement("nav");
export const footer = document.createElement("div");

navbar.innerHTML = navbarLayout;
navbar.classList.add("navbar");

footer.innerHTML = footerLayout;
