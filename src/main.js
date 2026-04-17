import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap';

import './css/style.css';

import './js/app.js';

import './js/i18n.js';
import { iniciarIdioma, setidioma } from './js/i18n.js';


iniciarIdioma();

document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener('click', () => setidioma(btn.dataset.lang));
});

console.log('Vite y bootstrap cargados y listos');