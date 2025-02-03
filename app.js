
document.getElementById('menu-button').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    var mainMenu = document.getElementById('main-menu');
    
    mobileMenu.classList.toggle('hidden');
    if (!mobileMenu.classList.contains('hidden')) {
        mainMenu.classList.add('hidden');
    } else {
        mainMenu.classList.remove('hidden');
    }
});


let currentIndex = 0;
const slides = document.querySelectorAll('.slide-box');
const totalSlides = slides.length;
const visibleSlides = 3;

function moveSlide(step) {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    currentIndex += step;

    // Prevent moving beyond the available slides
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > totalSlides - visibleSlides) {
        currentIndex = totalSlides - visibleSlides;
    }

    const translateX = -(currentIndex * (100 / visibleSlides)) + "%";
    sliderWrapper.style.transform = `translateX(${translateX})`;
}

function playVideo(url) {
    window.open(url, "_blank");
}
