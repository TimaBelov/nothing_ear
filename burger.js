const BURGER_OPENED_CLASSNAME = 'burger__open';
const BURGER_BTN_OPENED_CLASSNAME = 'burger__btn__open';
const BODY_FIXED_CLASSNAME = "body__fixed";

const burgerNode = document.querySelector('.js-burger');
const burgerBtnNode = document.querySelector('.js-burger-btn');
const burgerContentNode = document.querySelector(".js-burger-content");
const bodyNode = document.querySelector("body")

burgerBtnNode.addEventListener('click', toggleBurger);
burgerContentNode.addEventListener('click',toggleBurger);

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
}
