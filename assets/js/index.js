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

const switchHandler = ({ target }) => {
  const closeElement = target === closeBtn ? closeBtn : openBtn;
  const openElement = target === closeBtn ? openBtn : closeBtn;

  const closeText = closeElement.textContent;
  closeElement.textContent = openElement.textContent;
  openElement.textContent = closeText;

  closeElement.removeEventListener('mouseenter', switchHandler);
  openElement.addEventListener('mouseenter', switchHandler);
};

closeBtn.addEventListener('mouseenter', switchHandler);
