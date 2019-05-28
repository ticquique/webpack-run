import 'normalize.css';
import './main.scss';

import {footer as footerDiv, navbar} from 'app/layout';
import {navigate} from 'app/router';
import {background} from 'assets/index';

const backgroundOverlay = document.getElementById('background__overlay');

backgroundOverlay.style.backgroundImage = `url(${background})`;
const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');

header.appendChild(navbar);
footer.appendChild(footerDiv);
let url = window.location.pathname;
url = url.substring(1);
url = url === '' ? 'comic' : url;
navigate(url);
