const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
const itemWidth = carouselItems[0].offsetWidth;

function autoSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
}

setInterval(autoSlide, 3000); // 每3秒自动切换一次

function updateCarousel() {
  carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}