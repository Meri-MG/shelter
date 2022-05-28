const id = (id) => document.getElementById(id);
let burger = id('burger_icon'),
  sidenav = id('sidenav'),
  logoTitle = id('logo_title'),
  logoSub = id('logo_subtitle');

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
  toggleMenu(logoTitle);
  toggleMenu(logoSub);
});
console.log(burger);
