'use strict';

function createCounter(n) {
  let count = n;
  // Инкапсулирована.
  //Основана на замыкании
  return function increment() {
    count++;
    return count;
  };
}

const counter1 = createCounter(100);
const counter2 = createCounter(50);

/* 
  Напишите функцию addNum(n),
  которая вернёт другую функцию.

  Возвращенная функция должна складывать
  получаемый аргумент m с аргументом n возвращающей функции.
*/

function addNum(n) {
  let acc = n;
  return function (m) {
    return (acc = acc + m);
  };
}

const accumulator = addNum(10);
accumulator(10); //20
accumulator(50); //70
accumulator(1); //71
