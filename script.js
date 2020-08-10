// accordion
const accordion__items = [...document.querySelectorAll('.accordion__item')];

accordion__items.forEach((item) => {
    const btn = item.querySelector('.accordion__header__img');
    const text = item.querySelector('.accordion__text__wrapper');
    let height;
    resize();

    if (!item.classList.contains('active')) {
        text.style.height = '0px';
    }

    function addOrRemoveHeight(height) {
        if (item.classList.contains('active')) {
            text.style.height = height + 'px';
        } else {
            text.style.height = '0px';
        }
    }

    function resize() {
        text.style.height = 'auto';
        height = text.scrollHeight;
        addOrRemoveHeight(height); 
    }

    window.addEventListener('resize', resize);

    btn.addEventListener('click', () => {
        item.classList.toggle('active');
        addOrRemoveHeight(height);
    });
});
//accordion

const header__wrapper = document.querySelector('.header__wrapper');
const header__burger = document.querySelector('.header__burger');
const nav__menu = document.querySelector('.nav__menu');

header__burger.addEventListener('click', () => {
    header__wrapper.classList.toggle('active');

});