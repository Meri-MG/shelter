import { getData, id } from './utils.js';
import { printPopup } from './modal.js';

const prev = document.querySelector('.left_handle');
const next = document.querySelector('.right_handle');
const desktopArr1 = id('desktop_1');
const desktopArr2 = id('desktop_2');
const mobPrev = id('left_handle');
const mobNext = id('right_handle');

const slider = document.querySelector('.pets_cards');
const sliderContainer = document.querySelector('.slider_container');

const createCard = ({ id, name, img }) => {
  return `<li class='card_item' id=${id}>
  <div>
    <img src=${img} alt=${name}/>
  </div>
  <div class="card_content">
    <h4>${name}</h4>
    <button type="button" class="pets_button">Learn more</button>
  </div>
</li>`;
};

const renderCards = (obj) => {
  let random;
  if (screen.width >= 1280) {
    random = obj.sort(() => 0.5 - Math.random()).slice(0, 3);
  }
  if (screen.width < 1280 && screen.width >= 768) {
    random = obj.sort(() => 0.5 - Math.random()).slice(0, 2);
  }
  if (screen.width < 768) {
    random = obj.sort(() => 0.5 - Math.random()).slice(0, 1);
  }
  slider.innerHTML = random.map(createCard).join('');
};

getData().then((petsList) => {
  renderCards(petsList);
});

window.addEventListener('resize', () => {
  if (screen.width < 720) {
    desktopArr1.style.display = 'none';
    desktopArr2.style.display = 'none';
    sliderContainer.classList.add('active');
  }
});

// click right btn
next.addEventListener('click', () => {
  getData().then((petsList) => {
    renderCards(petsList);
    printPopup();
  });
});

// click left btn
prev.addEventListener('click', () => {
  getData().then((petsList) => {
    renderCards(petsList);
    printPopup();
  });
});

mobNext.addEventListener('click', () => {
  getData().then((petsList) => {
    renderCards(petsList);
    printPopup();
  });
});

// click left btn
mobPrev.addEventListener('click', () => {
  getData().then((petsList) => {
    renderCards(petsList);
    printPopup();
  });
});

export { next, prev, slider, createCard };
