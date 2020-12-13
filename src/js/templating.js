import items from '../templates/menu-items.hbs';
import menu from '../menu.json';

const menuRef = document.querySelector('.js-menu');

const markup = items(menu);

menuRef.insertAdjacentHTML('beforeend', markup);