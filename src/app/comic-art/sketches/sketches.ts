import "./sketches.scss";
import sketchesLayout from "./sketches.handlebars";

import {} from "assets/index";

const context = {};

export const artSketchesLayout = document.createElement("div");
artSketchesLayout.innerHTML = sketchesLayout(context);
