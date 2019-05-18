import "./comic-main.scss";
import mainComic from "./comic-main.handlebars";

import {
  comic1,
  comic2,
  comic3,
  comic4,
  comic5,
  comic6,
  comic7,
  comic8,
  comic9,
  comic10,
  comic11,
  rightArrow
} from "assets/index";

const comicPages = [comic1, comic2, comic3, comic4, comic5, comic6, comic7, comic8, comic9, comic10, comic11];
const context = { rightArrow };
let currentIndex = 0;

export const comicMainLayout = document.createElement("div");

function initializeMain() {
  addListeners();
  comicMainLayout.classList.add("comicMainLayout");
  comicMainLayout.id = "comicMainLayout";
  comicMainLayout.setAttribute("aria-label", "comic content");
  changeImage(currentIndex);
}

function nextImage() {
  currentIndex += 1;
  currentIndex = currentIndex >= comicPages.length ? 0 : currentIndex;
  changeImage(currentIndex);
}

function prevImage() {
  currentIndex -= 1;
  currentIndex = currentIndex < 0 ? comicPages.length - 1 : currentIndex;
  changeImage(currentIndex);
}

function changeImage(index: number) {
  const container = comicMainLayout.querySelector<HTMLElement>("#comic__images");
  if (container !== null) {
    let imageElement = container.querySelector<HTMLImageElement>("img");
    if (imageElement === null) {
      imageElement = document.createElement("img");
      container.appendChild(imageElement);
    }
    imageElement.src = comicPages[index];
  }
}

function addListeners() {
  const leftArrowElement = comicMainLayout.querySelector<HTMLElement>("#leftarrow");
  const rightArrowElement = comicMainLayout.querySelector<HTMLElement>("#rightarrow");
  leftArrowElement.addEventListener("click", function() {
    window.requestAnimationFrame(() => prevImage());
  });
  leftArrowElement.addEventListener("keydown", function(e) {
    if (e.key === "Enter") window.requestAnimationFrame(() => prevImage());
  });
  rightArrowElement.addEventListener("click", function() {
    window.requestAnimationFrame(() => nextImage());
  });
  rightArrowElement.addEventListener("keydown", function(e) {
    if (e.key === "Enter") window.requestAnimationFrame(() => nextImage());
  });
  document.addEventListener("keydown", function(e) {
    const currentpage = document.body.getAttribute("data-currentpage");
    if (currentpage === null || currentpage === "comic") {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    }
  });
}

comicMainLayout.innerHTML = mainComic(context);
initializeMain();
