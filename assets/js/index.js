'use strict';

const cardContainer = document.getElementById('root');
const HTMLLIElements = data.map((place) => createPlaceCardElement(place));
cardContainer.append(...HTMLLIElements);

/**
 *
 * @param {object} place
 * @returns {HTMLLIElement}
 */
function createPlaceCardElement(place) {
  const { description, name } = place;

  const wrapper = document.createElement('li');
  wrapper.classList.add('cardWrapper');

  const article = document.createElement('article');
  article.classList.add('cardContainer');

  const heading = document.createElement('h2');
  heading.classList.add('cardName');
  // heading.textContent = place.name;

  const descriptionElem = document.createElement('p');
  descriptionElem.classList.add('cardDescription');
  descriptionElem.append(document.createTextNode(description));

  heading.append(document.createTextNode(name));
  article.append(createCardImage(place), heading, descriptionElem);
  wrapper.append(article);
  return wrapper; //htmllielement
}

function createCardImage(place) {
  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('imageWrapper');
  imageWrapper.style.backgroundColor = stringToColour(place.name);

  const initials = document.createElement('div');
  initials.classList.add('imagePlaceholder', 'imagePlacement');
  const initialsContent = place.name[0];
  initials.append(document.createTextNode(initialsContent));

  const placeImg = createImage(place);

  imageWrapper.append(initials, placeImg);
  return imageWrapper;
}

function createImage({ profilePicture, name }) {
  const img = document.createElement('img'); // = new Image();
  img.setAttribute('src', profilePicture);
  img.setAttribute('alt', name);
  img.classList.add('cardImage', 'imagePlacement');
  img.addEventListener('error', imageErrorhandler);
  return img;
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
