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
  Напишите функцию addNum(),
  которая вернёт другую функцию.

  Возвращенная функция должна складывать
  получаемый аргумент m с аргументом  возвращающей функции.
*/

function createAdder() {
  let state = 0; // состояние замкнуто.
  return {
    increment(value) {
      return (state += value);
    },
    decrement(value) {
      return (state -= value);
    },
  };
}

const accumulator1 = createAdder();
console.log(accumulator1.increment(15));
console.log(accumulator1.increment(10));

const accumulator2 = createAdder(0);
