'use strict';

const [closeBtn, openBtn] = document.querySelectorAll('button');

const clickHandler = ({ target }) => {
  alert(target.textContent);
};

closeBtn.addEventListener('click', clickHandler);
openBtn.addEventListener('click', clickHandler);

/* 
Поменять местами содержимое кнопок 
по наведению на кнопку close 
*/
