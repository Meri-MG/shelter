import { getData, id } from './utils.js';
import { printPopup } from './modal.js';

export const prev = id('left_handle');
export const next = id('right_handle');

const slider = document.querySelector('.pets_cards');

export const createCard = ({ id, name, img }) => {
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
