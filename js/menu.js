let nav = document.querySelector(".menu");
let hamburger = document.querySelector(".icon");
let ancherTags = document.querySelectorAll(".menu-icon a");
let mediaQuery = window.matchMedia("(max-width: 768px)");

hamburger.addEventListener("click", function(event) {
  event.stopPropagation();
  if(mediaQuery.matches) {
    toggleReveal();
  }
});

for( let a of ancherTags ) {
  a.addEventListener("click", function(event) {
    event.stopPropagation();
  if(mediaQuery.matches) {
    toggleReveal();
  }
  });
}

function toggleReveal() {
  hamburger.classList.toggle("reveal");
  nav.classList.toggle("reveal");
}
