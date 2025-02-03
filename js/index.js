document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o cabeçalho fixo
  const topNavigation = document.querySelector(".top-navigation");

  // Altera cor de fundo ao rolar a página
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      topNavigation.classList.add("scrolled");
    } else {
      topNavigation.classList.remove("scrolled");
    }
  });

  // Carousel de feedback
  const feedbacks = document.querySelectorAll(".feedback-card");
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

  // Troca automática de feedback a cada 5 segundos
  setInterval(nextFeedback, 5000);
});

// scroll suave
document.querySelectorAll( 'a[href^="#"]' ).forEach( anchor => {
  anchor.addEventListener( 'click' , function( e ) {
    e.preventDefault();
    document.querySelector( this.getAttribute( 'href') ).scrollIntoView({ behavior: 'smooth'});
  });
});