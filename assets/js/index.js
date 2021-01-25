'use strict';

const btn = document.querySelector('button');
const div = document.querySelector('#root');

const clickHandler = (e) => {
  console.group('el');
  console.dir(e.currentTarget); // элемент чей обработчик сработал
  console.groupEnd();
};

btn.addEventListener('click', clickHandler);
div.addEventListener('click', clickHandler, true);
document.body.addEventListener('click', clickHandler);
window.addEventListener('click', clickHandler, {
  capture: true,
});
