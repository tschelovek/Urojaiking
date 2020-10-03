'use strict'

const benefitsItem = document.querySelectorAll('.displayChange');

const deactivatedItem = () => {
    benefitsItem.forEach(item => item.querySelector('.displayChangeHided').classList.add('deactivated'))}

deactivatedItem();

benefitsItem.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.querySelector('.displayChangeHided').classList.remove('deactivated');
            if (item.querySelector('.displayChangeVisible') == null) {
            } else {
                item.querySelector('.displayChangeVisible').classList.add('deactivated');
            }
            if (item.querySelector('.marker') == null) {
            } else {
                item.querySelector('.marker').classList.add('highZ');
            }
        });
    }
);

benefitsItem.forEach((item) => item.addEventListener('mouseout', () => {
    deactivatedItem()
    if (item.querySelector('.displayChangeVisible') == null) {
    } else {
    item.querySelector('.displayChangeVisible').classList.remove('deactivated');
    }
    if (item.querySelector('.marker') == null) {
    } else {
        item.querySelector('.marker').classList.remove('highZ');
    }
}));
