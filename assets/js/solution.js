'use strict';
/* new URL('https://www.facebook.com/DwayneJohnson'); // {hostname}
new Map().set('www.facebook.com', 'src to fb icon'); // key - hostname
 */

const cardContainer = document.getElementById('root');

const cards = responseData.map((user)=>createUserCardElement(user));

function createUserCardElement(user){
  const {discription, firstName, lastName,}=user;
 
  const p = createElement('p',{ classNames:['cardDescription']},[document.createTextNode(discription)]);
  const h3 = createElement('h3',{classNames:['cardFirstName']},document.createTextNode(firstName));
  const h4 = createElement('h4',{classNames:['cardLastName']}, document.createTextNode(lastName));
  const divIcons = createElement('div',{classNames:['iconsSocialWrapper']});
  const img = createImg(user);
  const socialIcons = createIcons(user);



};

function createCardImage(user){
  const {firstName, id}=user;
  
}

/**
 *
 * @param {string} type
 * @param {object} options
 * @param {string[]} options.classNames
 * @param {function} options.onClick
 * @param {HTMLElement[]} children
 */
function createElement(type, { classNames, onClick }, children) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.onclick = onClick;
  elem.append(...children);
  return elem;
}