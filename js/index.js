document.addEventListener("DOMContentLoaded", () => {
  // Menu
  const headerMenu = document.querySelector(".header-menu");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      headerMenu.classList.add("scrolled");
    } else {
      headerMenu.classList.remove("scrolled");
    }
  });

  // Carousel
  const feedbacks = document.querySelectorAll(".article-feed");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;

  function showFeedback(index) {
    feedbacks.forEach((feed, i) => {
      feed.classList.toggle("active", i === index);
    });
  }

  function nextFeedback() {
    currentIndex = (currentIndex + 1) % feedbacks.length;
    showFeedback(currentIndex);
  }

  function prevFeedback() {
    currentIndex = (currentIndex - 1 + feedbacks.length) % feedbacks.length;
    showFeedback(currentIndex);
  }

  nextBtn.addEventListener("click", nextFeedback);
  prevBtn.addEventListener("click", prevFeedback);

  setInterval(nextFeedback, 5000);
});
