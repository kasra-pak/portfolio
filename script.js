// // // // // // // // these linse refer to animating mobile menu toggle // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// const hamburgerBtn = document.querySelector(".hamburger-btn");
// const logoEl = document.querySelector(".logo");
// const nameEl = document.querySelector(".name");
// const navLinksEl = document.querySelector(".nav-links");

// hamburgerBtn.addEventListener("click", toggleMobileMenu);
// nameEl.addEventListener("transitionend", showMobileMenu);

// function toggleMobileMenu(e) {
//   const pressed = e.currentTarget.getAttribute("aria-pressed");

//   if (pressed === "true") {
//     e.currentTarget.setAttribute("aria-pressed", "false");
//     navLinksEl.classList.remove("open");
//   } else {
//     e.currentTarget.setAttribute("aria-pressed", "true");
//     navLinksEl.classList.add("open");
//   }

//   nameEl.classList.toggle("hidden");
// }

// function showMobileMenu(e) {
//   const nameIsHidden =
//     e.propertyName === "opacity" &&
//     e.currentTarget.classList.contains("hidden");

//   if (nameIsHidden) {
//     e.currentTarget.classList.add("removed");
//     navLinksEl.classList.add("open");
//   }
// }

const navLinks = document.querySelector(".nav-links");
const fadeScroll = document.querySelector(".fade-scroll");

// console.log(navLinks);

window.addEventListener("load", toggleFadeScrollEffect);
window.addEventListener("resize", toggleFadeScrollEffect);
navLinks.addEventListener("scroll", toggleFadeScrollEffect);

function toggleFadeScrollEffect() {
  const overflow = navLinks.clientWidth < navLinks.scrollWidth;
  const isScrollAtStart = navLinks.scrollLeft === 0;
  const isScrollAtEnd = navLinks.scrollLeft === navLinks.scrollLeftMax;

  if (overflow) {
    if (isScrollAtStart) {
      fadeScroll.classList.add("fade-right");
      fadeScroll.classList.remove("fade-left");
    } else if (isScrollAtEnd) {
      fadeScroll.classList.add("fade-left");
      fadeScroll.classList.remove("fade-right");
    } else {
      fadeScroll.classList.add("fade-left");
      fadeScroll.classList.add("fade-right");
    }
  } else {
    fadeScroll.classList.remove("fade-left", "fade-right");
  }
}
