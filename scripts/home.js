// Navbar Fade Scroll functionality (tiny screens)
const navLinks = document.querySelector(".nav-links");
const fadeScroll = document.querySelector(".fade-scroll");

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
