"use strict";

const supportedSocialNetworks = new Map();
supportedSocialNetworks.set("www.facebook.com", "./assets/icons/facebook.svg");
supportedSocialNetworks.set("twitter.com", "./assets/icons/instagram.svg");
supportedSocialNetworks.set("www.instagram.com", "./assets/icons/twitter.svg");

const cardContainer = document.getElementById("root");

const cards = responseData.map((user) => createUserCardElement(user));
cardContainer.append(...cards);

const [icons] = responseData.map((user) => createIcons(user.contacts));
