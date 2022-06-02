import { getData, classes, id } from './utils.js';

export const showBtns = classes('pets_button');

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
    return `<div class="popup-div" id="${index}">
              <div class="header-popup">
                <img src="../../assets/images/closebtn.png" class="closingIcon" alt="close-icon">
              </div>
              <div class="project-popup">
                <div>
                  <img src="${img}" alt="image-popup" class="image-popup">
                </div>
                <div class="info-popup">
                  <h3 class="title-popup">${name}</h3>
                  <h4>${type} - ${breed}</h4>
                  <p>${description}</p>
                  <ul class="">
                    <li class="list-popup"><span>Age: </span>${age}</li>
                    <li class="list-popup"><span>Inoculations: </span>${inoculations}</li>
                    <li class="list-popup"><span>Diseases: </span>${diseases}</li>
                    <li class="list-popup"><span>Parasites: </span>${parasites}</li>
                  </ul>
                </div>
              </div>
            </div>`;
  };
  obj.forEach((pet) => {
    if (pet.id === index) {
      modal.innerHTML += modalHTML(pet);
      // modal.classList.add('open');
      // mainBody.classList.add('fixed');
    }
  });
  const popupDIV = document.querySelector('.popup-div');
  const closeBtn = classes('closingIcon');
  [...closeBtn].forEach((btn) => {
    btn.addEventListener('click', () => {
      // mainBody.classList.remove('fixed');
      // popup.classList.remove('open');
      popupDIV.remove();
    });
  });
};

getData().then((petsList) => {
  [...showBtns].forEach((btn, index) => {
    btn.addEventListener('click', () => {
      if (index === petsList[index].id) {
        displayPets(petsList, petsList[index].id);
      }
    });
  });
});
