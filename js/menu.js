let nav = document.querySelector(".menu");
let hamburger = document.querySelector(".icon img");
let menu = document.querySelector(".desktop-menu");

hamburger.addEventListener("click", function(event) {
  event.stopPropagation();
  menu.classList.toggle("hidden");
  menu.classList.toggle("desktop-menu__link");
  header.classList.toggle("allViewHeight");
});
