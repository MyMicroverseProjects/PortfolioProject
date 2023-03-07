const nav = document.querySelector('.menu');
const hamburger = document.querySelector('.icon');
const ancherTags = document.querySelectorAll('.menu-icon a');
const mediaQuery = window.matchMedia('(max-width: 768px)');

function toggleReveal() {
  hamburger.classList.toggle('reveal');
  nav.classList.toggle('reveal');
}

hamburger.addEventListener('click', (event) => {
  event.stopPropagation();
  if (mediaQuery.matches) {
    toggleReveal();
  }
});

ancherTags.forEach((a) => {
  a.addEventListener('click', (event) => {
    event.stopPropagation();
    if (mediaQuery.matches) {
      toggleReveal();
    }
  });
});
