const stickyNav = document.querySelector(".header-menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    stickyNav.classList.add("scrolled");
  } else {
    stickyNav.classList.remove("scrolled");
  }
});
