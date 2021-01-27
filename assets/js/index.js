'use strict';

const cardContainer = document.getElementById('root');

console.log(data);

const HTMLLIElements = data.map((place) => createPlaceCardElement(place));

cardContainer.append(...HTMLLIElements);

/**
 *
 * @param {object} place
 * @returns {HTMLLIElement}
 */
function createPlaceCardElement(place) {
  const wrapper = document.createElement('li');
  wrapper.classList.add('cardWrapper');

  const article = document.createElement('article');
  article.classList.add('cardContainer');

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('imageWrapper');
  imageWrapper.style.backgroundColor = stringToColour(place.name);

  const initials = document.createElement('div');
  initials.classList.add('imagePlaceholder', 'imagePlacement');
  const initialsContent = place.name[0];
  initials.append(document.createTextNode(initialsContent));

  const placeImg = document.createElement('img'); // = new Image();
  placeImg.setAttribute('src', place.profilePicture);
  placeImg.setAttribute('alt', place.name);
  placeImg.classList.add('cardImage', 'imagePlacement');

  placeImg.addEventListener('error', imageErrorhandler);

  imageWrapper.append(initials, placeImg);

  const heading = document.createElement('h2');
  heading.classList.add('cardName');
  // heading.textContent = place.name;

  const description = document.createElement('p');
  description.classList.add('cardDescription');
  description.append(document.createTextNode(place.description));

  heading.append(document.createTextNode(place.name));
  article.append(imageWrapper, heading, description);
  wrapper.append(article);
  return wrapper; //htmllielement
}

/* 

  EVENT LISTENERS

*/
function imageErrorhandler({ target }) {
  target.remove();
}

/* 

  UTILS

*/
// DONT TRUST THIS CODE. TAKEN FROM STACKOVERFLOW
function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}
