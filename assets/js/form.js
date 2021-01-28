'use strict';

const state = [];

const form = document.getElementById('root-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const {
    target,
    target: { email: emailInput },
  } = e;

  console.dir(emailInput.value); // form

  target.reset();
});

/* Пушить в массив значение input'а при сабмите формы */
/* Рендерить на странице то, что было введено в форму */
/* Если значение инпута пустое - ничего не делать */
/* Кнопка удаления у li'шки - удаляет элемент со стрн и 
    его значение из массива */