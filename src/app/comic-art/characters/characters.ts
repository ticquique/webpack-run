import './characters.scss';

import {marta_acting, marta_expresion, monica_acting, monica_expresion, rightArrow} from 'assets/index';

import charactersLayout from './characters.handlebars';

const martaDescription =
    'Marta es una estudiante de turismo, tiene 24 a&ntilde;os y siempre ha vivido en la ciudad. Todo lo que realiza est&aacute; encaminado a su gran meta: leer y seguir aprendiendo sobre los viajes y pa&iacute;ses que quiere visitar. Se deja llevar y a veces, se preocupa mas de lo que deber&iacute;a.';

const monicaDescription =
    'M&oacute;nica es compañera y la mejor amiga de marta durante muchos años. Comparten estudios y metas pero M&oacute;nica est&aacute; mas centrada en algo: no desconcentrarse. S&oacute;lo quiere trabajar, no dejar tiempo para tomar un respiro. Y esta actitud le transmite a su amiga a diario...';
const martaImages = [marta_acting, marta_expresion];
const monicaImages = [monica_acting, monica_expresion];

const context = {
  marta_acting,
  martaDescription,
  rightArrow
};

export const artCharactersLayout = document.createElement('div');
artCharactersLayout.innerHTML = charactersLayout(context);

let initial = 'marta';
let currentIndex = 0;
const container = artCharactersLayout.querySelector<HTMLElement>('#character-image');
const imageElement = container.querySelector<HTMLImageElement>('img');
const martaCharacter = artCharactersLayout.querySelector<HTMLElement>('#marta-character');
const monicaCharacter = artCharactersLayout.querySelector<HTMLElement>('#monica-character');
const prevImage = artCharactersLayout.querySelector<HTMLElement>('#character-toparrow');
const nextImage = artCharactersLayout.querySelector<HTMLElement>('#character-bottomarrow');
const description = artCharactersLayout.querySelector<HTMLElement>('#character_description');
const paginator = artCharactersLayout.querySelector<HTMLElement>('#characterPaginator');

function goNext() {
  const array = initial === 'marta' ? martaImages : monicaImages;
  currentIndex += 1;
  currentIndex = currentIndex >= array.length ? 0 : currentIndex;
  changeImage(array[currentIndex]);
}

function goPrev() {
  const array = initial === 'marta' ? martaImages : monicaImages;
  currentIndex -= 1;
  currentIndex = currentIndex < 0 ? array.length - 1 : currentIndex;
  changeImage(array[currentIndex]);
}

function swapCharacter(name: string) {
  initial = name;
  currentIndex = 1;
  goPrev();
  description.innerHTML = initial === 'marta' ? martaDescription : monicaDescription;
}

function changeImage(src: string) {
  const array = initial === 'marta' ? martaImages : monicaImages;
  paginator.innerHTML = `${currentIndex + 1}/${array.length}`;
  imageElement.src = src;
}

function addListeners() {
  prevImage.addEventListener('click', () => goPrev());
  nextImage.addEventListener('click', () => goNext());
  martaCharacter.addEventListener('click', () => swapCharacter('marta'));
  monicaCharacter.addEventListener('click', () => swapCharacter('monica'));
}

requestAnimationFrame(() => {
  changeImage(martaImages[currentIndex]);
  addListeners();
});
