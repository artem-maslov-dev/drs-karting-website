const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    const minusBtn = counter.querySelector('.counter__btn-minus');
    const plusBtn = counter.querySelector('.counter__btn-plus');

    const input = counter.querySelector('.counter__input');

    let count = 1;

    plusBtn.addEventListener('click', () => {

        if (count < 99) {

            count++;

            input.value = count;
        }
    });

    minusBtn.addEventListener('click', () => {

        if (count > 1) {

            count--;

            input.value = count;
        }
    });

});