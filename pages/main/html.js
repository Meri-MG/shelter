import { getData, classes, id } from './utils.js';

export const prev = id('left_handle');
export const next = id('right_handle');

const slider = document.querySelector('.pets_cards');
const petsCards = slider.children;

let carouselWidth = document.querySelector('.pets_section').offsetWidth;

window.addEventListener('resize', () => {
  carouselWidth = document.querySelector('.pets_section').offsetWidth;
});

let index = 0;

next.addEventListener('click', () => {
  index++;
  slider.style.transform = `translateX(-${index * carouselWidth}px)`;
  // slider.innerHTML = random;
});

prev.addEventListener('click', () => {
  index--;
  slider.style.transform = `translateX(-${index * carouselWidth}px)`;
});

const itemCount = slider.children.length;
const itemsPerScreen = parseInt(
  getComputedStyle(slider).getPropertyValue('--items-per-screen')
);

let random = [...petsCards].sort(() => Math.random() - 0.5);

console.log(random, 'children');
