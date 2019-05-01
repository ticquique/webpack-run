import { navbar, footer as footerDiv } from "app/layout";

const header = document.getElementById("header");
const main = document.getElementById("main");
const footer = document.getElementById("footer");

header.appendChild(navbar);
footer.appendChild(footerDiv);
