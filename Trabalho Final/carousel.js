let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carousel-image').length;

function updateCarousel() {
    const carousel = document.querySelector('.carousel-images');
    const newTransform = -100 * currentSlide;
    carousel.style.transform = `translateX(${newTransform}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}