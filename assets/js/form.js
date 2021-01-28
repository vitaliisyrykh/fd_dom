'use strict';

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
