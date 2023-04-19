"use strict";

//bouton burger

var hamburgerToggler = document.querySelector(".hamburger");
var navLinksContainer = document.querySelector(".navlinks-container");
var toggleNav = function toggleNav() {
  hamburgerToggler.classList.toggle("open");
  var ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
  hamburgerToggler.setAttribute("aria-expanded", ariaToggle);
  navLinksContainer.classList.toggle("open");
};
hamburgerToggler.addEventListener("click", toggleNav);
new ResizeObserver(function (entries) {
  if (entries[0].contentRect.width <= 900) {
    navLinksContainer.style.transition = "transform 0.3s ease-out";
  } else {
    navLinksContainer.style.transition = "none";
  }
}).observe(document.body);