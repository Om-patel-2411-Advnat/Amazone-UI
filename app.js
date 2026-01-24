document.addEventListener('DOMContentLoaded', function () {

  const carousel = document.querySelector(".carousel");
  const carouselTrack = document.querySelector(".carouselTrack");
  const slides = Array.from(carouselTrack.children);
  const nextbtn = document.querySelector('.next');
  const backbtn = document.querySelector('.back');

  let currentIndex = 0;
  const slideCount = slides.length;

  function goToSlide(index) {
    currentIndex = (index + slideCount) % slideCount;
    const offset = -currentIndex * 100;
    carouselTrack.style.transform = `translateX(${offset}%)`;
  }

  nextbtn.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
  });

  backbtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
  });

  // autoplay every 10s
  setInterval(() => {
    goToSlide(currentIndex + 1);
  }, 10000);

  goToSlide(0);
});
