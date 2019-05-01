import './navbar.scss';

import {bigLogo, smallFacebook, smallInstagram} from '../../../assets';

import * as navbarLayout from './navbar.handlebars';

const context = {
  bigLogo,
  smallFacebook,
  smallInstagram
};

export const navbar = document.createElement('div');

navbar.innerHTML = navbarLayout(context);
navbar.classList.add('navbar');
