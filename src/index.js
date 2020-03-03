'use strict';
import './styles.css';
import menu from './menu.json';
import template from './template.hbs';

////шаблонна розмітка
const markup = menu.reduce((acc, dish) => {
  return acc + template(dish);
}, '');
const container = document.querySelector('.js-menu');
container.insertAdjacentHTML('afterbegin', markup);

////тема
const body = document.querySelector('body');
const switchInput = document.querySelector('.js-switch-input');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeMaker = function() {
  if (switchInput.checked) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
    return;
  }
  body.classList.remove(Theme.DARK);
  body.classList.add(Theme.LIGHT);
  localStorage.setItem('Theme', Theme.LIGHT);
};

const pointerPossitioning = function() {
  if (localStorage.getItem('Theme') === 'dark-theme') {
    body.classList.add(Theme.DARK);
    switchInput.checked = true;
  }
};

switchInput.addEventListener('click', themeMaker);
pointerPossitioning();
