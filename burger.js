const BURGER_OPENED_CLASSNAME = 'burger__open';
const BURGER_BTN_OPENED_CLASSNAME = 'burger__btn__open';

const burgerNode = document.querySelector('.js-burger');
const burgerBtnNode = document.querySelector('.js-burger-btn');
const burgerLinkNode = document.querySelector(".js-burger-link");

burgerBtnNode.addEventListener('click', toggleBurger);
burgerLinkNode.addEventListener('click',toggleBurger);

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
}
