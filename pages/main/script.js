import { id } from './utils.js';
import { cards } from './modal.js';
import { prev, next } from './carousel.js';

let burger = id('burger_icon'),
  sidenav = id('sidenav');
let mainBody = document.querySelector('.main_body');

const toggleMenu = (el) => {
  if (el.classList.contains('open')) {
    el.classList.remove('open');
  } else {
    el.classList.add('open');
  }
};

burger.addEventListener('click', () => {
  toggleMenu(burger);
  toggleMenu(sidenav);
  toggleMenu(mainBody);
});
