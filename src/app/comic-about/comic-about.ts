import "./comic-about.scss";
import aboutComic from "./comic-about.handlebars";

import { about1, about1_2x, about2, about2_2x, about3, about3_3x } from "assets/index";

const context = {
  about1,
  about1_2x,
  about2,
  about2_2x,
  about3,
  about3_3x
};

export const comicAboutLayout = document.createElement("div");
comicAboutLayout.innerHTML = aboutComic(context);
