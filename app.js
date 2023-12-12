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
// click on burger icon
burger.addEventListener('click', () => {
  burger.classList.toggle('show');
  headerNav.classList.toggle('show');
  overlay.classList.toggle('show');
  document.documentElement.classList.toggle('lock');
  document.body.classList.toggle('lock');
});
// burger close function
const burgerClose = () => {
  headerNav.classList.remove('show');
  burger.classList.remove('show');
  overlay.classList.remove('show');
  document.documentElement.classList.remove('lock');
  document.body.classList.remove('lock');
};
// click on links in menu
for (let navLink of navLinks) {
  navLink.addEventListener('click', burgerClose);
}
// click on a space outside the menu
overlay.addEventListener('click', burgerClose);

// modal
const committeeBlock = document.querySelectorAll('.committee__block');
const modal = document.querySelector('.modal');
committeeBlock.forEach((el) =>
  el.addEventListener('click', () => {
    modal.classList.add('show');
    document.documentElement.classList.toggle('lock');
    document.body.classList.toggle('lock');
  })
);
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    document.documentElement.classList.remove('lock');
    document.body.classList.remove('lock');
  }
});
