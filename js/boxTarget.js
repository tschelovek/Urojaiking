'use strict'

const benefitsItem = document.querySelectorAll('.benefits__item');

const deactivatedItem = () => {
    benefitsItem.forEach(item => item.querySelector('.box2').classList.add('deactivated'))}

deactivatedItem();

benefitsItem.forEach((item) => item.addEventListener('mouseover', () => {
    item.querySelector('.box1').classList.add('deactivated');
    item.querySelector('.box2').classList.remove('deactivated');
    })
);

benefitsItem.forEach((item) => item.addEventListener('mouseout', () => {
    deactivatedItem()
    item.querySelector('.box1').classList.remove('deactivated');
}));

//TODO Сделать плавную анимацию перехода
