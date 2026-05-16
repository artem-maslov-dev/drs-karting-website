const track = document.querySelector('.slider__track');
const nextBtn = document.querySelector('.slider__btn-next');
const prevBtn = document.querySelector('.slider__btn-prev');

const items = document.querySelectorAll('.slider__item');

let currentSlide = 0;

const itemWidth = 344;

const visibleSlides = 3;

const maxSlide = items.length - visibleSlides;

function updateSlider() {
    track.style.transform = `translateX(-${currentSlide * itemWidth}px)`;
}

nextBtn.addEventListener('click', () => {

    if (currentSlide >= maxSlide) {
        currentSlide = 0;
    }
    else {
        currentSlide++;
    }

    updateSlider();
});

prevBtn.addEventListener('click', () => {

    if (currentSlide <= 0) {
        currentSlide = maxSlide;
    }
    else {
        currentSlide--;
    }

    updateSlider();
});