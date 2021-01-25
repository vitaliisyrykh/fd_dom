'use strict';

const [firstBtn, secondBtn] = document.querySelectorAll('button');

const clickHandler = (event) => {
  const {
    target: {
      dataset,
    },
  } = event;

  console.log(dataset);
};

firstBtn.addEventListener('click', clickHandler);
secondBtn.addEventListener('click', clickHandler);
