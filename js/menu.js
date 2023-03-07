let nav = document.querySelector(".menu");
let hamburger = document.querySelector(".icon");
let ancherTags = document.querySelectorAll(".menu-icon a");

hamburger.addEventListener("click", function(event) {
  event.stopPropagation();
  toggleReveal();
});

for( let a of ancherTags ) {
  a.addEventListener("click", function(event) {
    event.stopPropagation();
    toggleReveal();
  });
}

function toggleReveal() {
  hamburger.classList.toggle("reveal");
  nav.classList.toggle("reveal");
}
