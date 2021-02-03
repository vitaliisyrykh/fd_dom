"use strict";
/* new URL('https://www.facebook.com/DwayneJohnson'); // {hostname}
new Map().set('www.facebook.com', 'src to fb icon'); // key - hostname
 */
const supportedSocialNetworks = new Map();
supportedSocialNetworks.set("www.facebook.com", "./assets/icons/facebook.svg");
supportedSocialNetworks.set("twitter.com", "./assets/icons/instagram.svg");
supportedSocialNetworks.set("www.instagram.com", "./assets/icons/twitter.svg");

const cardContainer = document.getElementById("root");

const cards = responseData.map((user) => createUserCardElement(user));
cardContainer.append(...cards);



const [icons] = responseData.map((user) => createIcons(user.contacts));







