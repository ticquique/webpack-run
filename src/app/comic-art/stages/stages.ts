import "./stages.scss";
import stagesLayout from "./stages.handlebars";

import {} from "assets/index";

const context = {};

export const artStagesLayout = document.createElement("div");
artStagesLayout.innerHTML = stagesLayout(context);
