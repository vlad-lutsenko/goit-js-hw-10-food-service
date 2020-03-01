'use strict';
import './styles.css';
import menu from './menu.json';
import template from './template.hbs';
const markup = menu.reduce((acc, dish) => {
  return acc + template(dish);
}, '');
const container = document.querySelector('.js-menu');
container.insertAdjacentHTML('afterbegin', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
