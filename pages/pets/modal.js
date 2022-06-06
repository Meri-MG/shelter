import { getData, classes, id } from '../main/utils.js';

export const cards = document.getElementsByClassName('card_item');
const petsSection = document.querySelector('.pets_section');
let mainBody = document.querySelector('.main_body');

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
    if (pet.id == index) {
      modal.innerHTML += modalHTML(pet);
      modal.classList.add('active');
      petsSection.classList.add('fixed');
      mainBody.classList.add('open');
    }
  });
  const popupDIV = document.querySelector('.modal_wrapper');
  const closeBtn = classes('close_wrapper');
  [...closeBtn].forEach((btn) => {
    btn.addEventListener('click', () => {
      petsSection.classList.remove('fixed');
      modal.classList.remove('active');
      mainBody.classList.remove('open');
      popupDIV.remove();
    });
  });
};

export const printPopup = () => {
  getData()
    .then((petsList) => {
      [...cards].forEach((card, index) => {
        card.addEventListener('click', () => {
          let index = card.getAttribute('id');
          displayPets(petsList, index);
        });
      });
    })
    .catch((error) => {
      console.error(
        'There has been a problem with your fetch operation:',
        error
      );
    });
};
printPopup();
