import { getData, classes, id } from './utils.js';
import { createCard } from './carousel.js';

export const showBtns = classes('pets_button');
const mainBody = document.querySelector('.about_section');

let modal = id('modal');

const displayPets = (obj, index) => {
  const modalHTML = ({
    name,
    img,
    type,
    breed,
    description,
    age,
    inoculations,
    diseases,
    parasites,
  }) => {
    return `<div class="modal_wrapper" id="${index}">
              <div class="close_wrapper">
                <img src="../../assets/images/closebtn.png" class="closingIcon" alt="close-icon">
              </div>
              <div class="modal_content">
                <div class="modal_img_div">
                  <img src="${img}" alt=${name} class="modal_img">
                </div>
                <div class="modal_info">
                  <h3 class="modal_title">${name}</h3>
                  <h4>${type} - ${breed}</h4>
                  <p>${description}</p>
                  <ul class="modal_list">
                    <li class="modal_item"><span>Age: </span>${age}</li>
                    <li class="modal_item"><span>Inoculations: </span>${inoculations}</li>
                    <li class="modal_item"><span>Diseases: </span>${diseases}</li>
                    <li class="modal_item"><span>Parasites: </span>${parasites}</li>
                  </ul>
                </div>
              </div>
            </div>`;
  };
  obj.forEach((pet) => {
    if (pet.id === index) {
      modal.innerHTML += modalHTML(pet);
      modal.classList.add('active');
      mainBody.classList.add('fixed');
    }
  });
  const popupDIV = document.querySelector('.modal_wrapper');
  const closeBtn = classes('close_wrapper');
  [...closeBtn].forEach((btn) => {
    btn.addEventListener('click', () => {
      mainBody.classList.remove('fixed');
      modal.classList.remove('active');
      popupDIV.remove();
    });
  });
};

getData()
  .then((petsList) => {
    [...showBtns].forEach((btn, index) => {
      btn.addEventListener('click', () => {
        if (index === petsList[index].id) {
          displayPets(petsList, petsList[index].id);
        }
      });
    });
  })
  .catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
  });
