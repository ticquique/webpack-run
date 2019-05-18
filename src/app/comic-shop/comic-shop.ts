import "./comic-shop.scss";
import shopComic from "./comic-shop.handlebars";

import {
  bigLogo,
  smallFacebook,
  smallInstagram,
  leftArrow,
  rightArrow
} from "assets/index";

const context = {
  bigLogo,
  smallFacebook,
  smallInstagram,
  leftArrow,
  rightArrow
};

export const comicShopLayout = document.createElement("div");
comicShopLayout.innerHTML = shopComic(context);
