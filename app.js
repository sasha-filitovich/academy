import cv from './cv.js';
// click on links in header
const separateBlocks = document.querySelectorAll('.separate-block');
separateBlocks.forEach((el) =>
  el.addEventListener('click', () => {
    document.querySelectorAll('.active').forEach((item) => item.classList.remove('active'));
    document.querySelector(`.${el.getAttribute('href').slice(1)}`).classList.add('active');
  })
);
// burger
const burger = document.querySelector('.burger');
const headerNav = document.querySelector('.header__nav');
const overlay = document.querySelector('.overlay');
const navLinks = document.querySelectorAll('.nav__link');
// burger close function
const burgerClose = () => {
  headerNav.classList.remove('show');
  burger.classList.remove('show');
  overlay.classList.remove('show');
  document.documentElement.classList.remove('lock');
  document.body.classList.remove('lock');
};
// click on burger icon
burger.addEventListener('click', () => {
  burger.classList.toggle('show');
  headerNav.classList.toggle('show');
  overlay.classList.toggle('show');
  document.documentElement.classList.toggle('lock');
  document.body.classList.toggle('lock');
});
// click on links in menu
for (let navLink of navLinks) {
  navLink.addEventListener('click', burgerClose);
}
// click on a space outside the menu
overlay.addEventListener('click', burgerClose);

// modal
const committeeBlock = document.querySelectorAll('.committee__block');
const modal = document.querySelector('.modal');
const modalWrapper = document.querySelector('.modal__wrapper');
let modalContent;
const modalClose = document.querySelector('.modal__close');
// open the modal
committeeBlock.forEach((el, index) =>
  el.addEventListener('click', () => {
    modalContent = document.createElement('div');
    modalContent.className = 'modal__content';
    modalContent.innerHTML = `
      <img class="modal__photo" src=${cv[index].img} width="200" alt=${cv[index].name}>
      <h3>${cv[index].name}</h3>
      <p>${cv[index].text}</p>`;
    modalWrapper.append(modalContent);
    modal.classList.add('show');
    document.documentElement.classList.toggle('lock');
    document.body.classList.toggle('lock');
  })
);
// close the modal
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    document.documentElement.classList.remove('lock');
    document.body.classList.remove('lock');
    modalContent.remove();
  }
});
modalClose.addEventListener('click', () => {
  modal.classList.remove('show');
  document.documentElement.classList.remove('lock');
  document.body.classList.remove('lock');
  modalContent.remove();
});
