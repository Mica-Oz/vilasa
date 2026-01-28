$(document).ready(function () {
  $(".prac").click(function () {
    let prac = $(this);
    prac.toggleClass("expanded");
    if (prac.hasClass("expanded")) {
    }
    // prac.children(".offerings").fadeOut();

    // prac.siblings().children(".offerings").fadeOut();
    prac.find(".prac-sub").slideToggle();
  });

  // Hero slideshow functionality
  let currentSlide = 0;
  const slides = document.querySelectorAll('.hero-slide');
  const totalSlides = slides.length;

  function nextSlide() {
    // Add exit class to current slide
    slides[currentSlide].classList.add('exit');
    slides[currentSlide].classList.remove('active');

    // Move to next slide
    currentSlide = (currentSlide + 1) % totalSlides;

    // Add active class to next slide
    slides[currentSlide].classList.add('active');

    // Remove exit class after animation completes
    setTimeout(() => {
      slides.forEach(slide => slide.classList.remove('exit'));
    }, 1000);
  }

  // Change slide every 4 seconds
  setInterval(nextSlide, 4000);
});
