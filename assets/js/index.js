'use strict';

/* 
По нажатию на кнопку 
менять цвет div'а на соответствующий
*/
const div = document.getElementById('root');
const btns = document.querySelectorAll('#root > button');



// VARIANT 1 - BAD

/* for (const btn of btns) {
  btn.addEventListener('click', (event) => {
    // event.target.dataset.color;
    const {
      target: {
        dataset: { color },
        parentNode,
      },
    } = event;

    parentNode.style.backgroundColor = color;
  });
}  */

// VARIANT 2 - GOOD

const clickHandler = (event) => {
  // event.target.dataset.color;
  const {
    target: {
      dataset: { color },
      parentNode,
    },
  } = event;

  parentNode.style.backgroundColor = color;
};

for (const btn of btns) {
  btn.addEventListener('click', clickHandler);
}
