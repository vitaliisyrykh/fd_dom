'use strict';

const [btn] = document.getElementsByTagName('button');

function showAlert() {
  alert('HELLO DOM!');
}

function log(){
  console.log('event happened!')
}

/* 2 способа запуска обраточиков */
btn.addEventListener('click', showAlert );
btn.addEventListener('click', log);
// btn.onclick = showAlert;
