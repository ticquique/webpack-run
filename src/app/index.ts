import 'normalize.css';
import './main.scss';
import {footer as footerDiv, navbar} from 'app/layout';

const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');

header.appendChild(navbar);
footer.appendChild(footerDiv);
