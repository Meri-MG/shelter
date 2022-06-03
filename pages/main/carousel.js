import { getData, id } from './utils.js';

export const prev = id('left_handle');
export const next = id('right_handle');

const slider = document.querySelector('.pets_cards');
let slideIndex = 1;
let isMoving = false;

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

const moveSlides = () => {
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
};

// move when clicked

const moveHandler = (direction) => {
  isMoving = true;
  slider.style.transition = `transform 450ms ease-in-out`;
  direction !== 'right' ? (slideIndex -= 1) : (slideIndex += 1);
  moveSlides();
};

getData().then((petsList) => {
  let random = petsList.sort(() => Math.random() - 0.5);
  random.push(random[0]);
  random.unshift(random[random.length - 2]);
  slider.innerHTML = random.map(createCard).join('');
  // moveSlides();
});

// click right btn
next.addEventListener('click', () => {
  // if (isMoving) {
  //   return;
  // }
  moveHandler('right');
});

// click left btn
prev.addEventListener('click', () => {
  // if (!isMoving) {
  //   return;
  // }
  moveHandler('left');
});
