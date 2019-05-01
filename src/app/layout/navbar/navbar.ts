import "./navbar.scss";
import * as navbarLayout from "./navbar.handlebars";
import { logo } from "../../../assets";

const context = { logo };

export const navbar = document.createElement("nav");

navbar.innerHTML = navbarLayout(context);
navbar.classList.add("navbar");
