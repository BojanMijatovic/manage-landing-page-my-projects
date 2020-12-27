
const nav = document.querySelector('.__links');
const burger = document.querySelector('.burger-menu');
const links = document.querySelectorAll('.__item');


burger.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
  burger.classList.toggle('toggle');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    burger.classList.toggle('toggle');
  })
})