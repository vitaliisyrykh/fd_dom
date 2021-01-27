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

  const placeImg = document.createElement('img'); // = new Image();
  placeImg.setAttribute('src', place.profilePicture);
  placeImg.setAttribute('alt', place.name);
  placeImg.classList.add('cardImage');

  const heading = document.createElement('h2');
  heading.classList.add('cardName');
  // heading.textContent = place.name;

  const description = document.createElement('p');
  description.classList.add('cardDescription');
  description.append(document.createTextNode(place.description));

  heading.append(document.createTextNode(place.name));
  article.append(placeImg, heading, description);
  wrapper.append(article);
  return wrapper; //htmllielement
}
