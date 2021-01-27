'use strict';
/* 
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
 */

const sumContext = {
  a: 10,
  b: 20,
  c: 30,
};

function sum(...args) {
  console.log(this);
}
sum(123, 123, 123, 123, 123, 1234);

const sumWithThis = sum.bind(sumContext);

sumWithThis();

const data = [1, 2, 3];
function test() {
  console.log(this)
}

test();

const newTestFuncWithContext = test.bind(window);

data.forEach(newTestFuncWithContext);
