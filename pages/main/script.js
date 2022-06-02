import { id, getData, classes } from './utils.js';
import { showBtns } from './modal.js';

let burger = id('burger_icon'),
  sidenav = id('sidenav');

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
});
