const navLink = document.querySelectorAll('.nav__link');
navLink.forEach((el) =>
  el.addEventListener('click', () => {
    document.querySelectorAll('.active').forEach((item) => item.classList.remove('active'));
    document.querySelector(`.${el.getAttribute('href').slice(1)}`).classList.add('active');
  })
);
