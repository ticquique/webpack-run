import './stages.scss';

import {arte_final_estacion, concept_art_station, cruce_de_coches, rightArrow} from 'assets/index';
import stagesLayout from './stages.handlebars';

const images = [arte_final_estacion, concept_art_station, cruce_de_coches];
const context = {rightArrow};

export const artStagesLayout = document.createElement('div');
artStagesLayout.innerHTML = stagesLayout(context);

const container = artStagesLayout.querySelector<HTMLElement>('#stage-image');
const imageElement = container.querySelector<HTMLImageElement>('img');
const paginator = artStagesLayout.querySelector<HTMLElement>('#stagePaginator');
const prevImage = artStagesLayout.querySelector<HTMLElement>('#stage-toparrow');
const nextImage = artStagesLayout.querySelector<HTMLElement>('#stage-bottomarrow');
let currentIndex = 0;

function goNext() {
  currentIndex += 1;
  currentIndex = currentIndex >= images.length ? 0 : currentIndex;
  changeImage(images[currentIndex]);
}

function goPrev() {
  currentIndex -= 1;
  currentIndex = currentIndex < 0 ? images.length - 1 : currentIndex;
  changeImage(images[currentIndex]);
}

function changeImage(src: string) {
  paginator.innerHTML = `${currentIndex + 1}/${images.length}`;
  imageElement.src = src;
}

function addListeners() {
  prevImage.addEventListener('click', () => goPrev());
  nextImage.addEventListener('click', () => goNext());
}

requestAnimationFrame(() => {
  addListeners();
  changeImage(images[currentIndex]);
})
