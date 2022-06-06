// import { prev } from '../main/carousel.js';
import { id, getData } from '../main/utils.js';
import { printPopup } from './modal.js';

let firstBtn = id('first_btn'),
  prevBtn = id('prev_btn'),
  nextBtn = id('next_btn'),
  lastBtn = id('last_btn'),
  pageNum = id('page_num');

const slider = document.querySelector('.pets_cards');

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

export const renderCards = (obj) => {
  let random;
  if (screen.width >= 1280) {
    random = obj.sort(() => 0.5 - Math.random()).slice(0, 8);
  }
  if (screen.width < 1280 && screen.width >= 768) {
    random = obj.sort(() => 0.5 - Math.random()).slice(0, 6);
  }
  if (screen.width < 768) {
    random = obj.sort(() => 0.5 - Math.random()).slice(0, 3);
  }
  slider.innerHTML = random.map(createCard).join('');
  console.log(obj, 'obje');
};

getData().then((petsList) => {
  renderCards(petsList);
});

let count = 2;
pageNum.innerText = 1;
let lastCount = 0;

nextBtn.addEventListener('click', () => {
  getData().then((petsList) => {
    renderCards(petsList);
    if (screen.width >= 1280) {
      if (count === 6) {
        nextBtn.classList.add('disabled');
        nextBtn.disabled = true;
        lastBtn.classList.add('disabled');
        lastBtn.disabled = true;
      } else {
        nextBtn.classList.remove('disabled');
        nextBtn.disabled = false;
        lastBtn.classList.remove('disabled');
        lastBtn.disabled = false;
      }
      pageNum.innerText = count;
      // count++;
    }

    if (screen.width < 1280 && screen.width >= 768) {
      if (count === 8) {
        nextBtn.classList.add('disabled');
        nextBtn.disabled = true;
        lastBtn.classList.add('disabled');
        lastBtn.disabled = true;
      } else {
        nextBtn.classList.remove('disabled');
        nextBtn.disabled = false;
        lastBtn.classList.remove('disabled');
        lastBtn.disabled = false;
      }
      pageNum.innerText = count;
      // count++;
    }

    if (screen.width < 768) {
      if (count === 16) {
        nextBtn.classList.add('disabled');
        nextBtn.disabled = true;
        lastBtn.classList.add('disabled');
        lastBtn.disabled = true;
      } else {
        nextBtn.classList.remove('disabled');
        nextBtn.disabled = false;
        lastBtn.classList.remove('disabled');
        lastBtn.disabled = false;
      }
      pageNum.innerText = count;
      // count++;
    }

    // printPopup();
    count++;
    console.log(count, 'count');
  });
});

lastBtn.addEventListener('click', () => {
  getData().then((petsList) => {
    renderCards(petsList);
    if (lastCount === 0) {
      lastBtn.classList.add('disabled');
      lastBtn.disabled = true;
      nextBtn.classList.add('disabled');
      nextBtn.disabled = true;
    } else {
      lastBtn.classList.remove('disabled');
      lastBtn.disabled = false;
      nextBtn.classList.remove('disabled');
      nextBtn.disabled = false;
    }
    pageNum.innerText = 6;
    lastCount += 6;
  });
  console.log(lastCount, 'last');
});

prevBtn.addEventListener('click', () => {
  getData().then((petsList) => {
    renderCards(petsList);
    pageNum.innerText = count;
    if (count === 1) {
      prevBtn.classList.add('disabled');
      prevBtn.disabled = true;
    } else {
      prevBtn.classList.remove('disabled');
    }
    count--;
    lastCount--;

    // printPopup();
    console.log(count, 'count');
    // printPopup();
  });
});

firstBtn.addEventListener('click', () => {
  getData().then((petsList) => {
    renderCards(petsList);
    pageNum.innerText = 1;
    if ((pageNum.innerText = 1)) {
      firstBtn.classList.add('disabled');
      firstBtn.disabled = true;
      prevBtn.classList.add('disabled');
      prevBtn.disabled = true;
    }
  });
});

printPopup();
