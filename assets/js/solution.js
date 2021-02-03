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

function createUserCardElement(user) {
  const { discription, firstName, lastName } = user;

  const p = createElement("p", { classNames: ["cardDescription"] }, [
    document.createTextNode(discription),
  ]);
  const h3 = createElement("h3", { classNames: ["cardFirstName"] }, [
    document.createTextNode(firstName),
  ]);
  const h4 = createElement("h4", { classNames: ["cardLastName"] }, [
    document.createTextNode(lastName),
  ]);
    const icons = createIcons(user.contacts);
  const divIcons = createElement('div',{classNames:['iconsSocialWrapper']},[...icons]);  
  
  const img = createCardImage(user);
  const article = createElement("article", { classNames: ["cardContainer"] }, [
    img,
    h3,
    h4,
    p,
    divIcons,
  ]);
  const li = createElement("li", { classNames: ["cardWrapper"] }, [article]);
  return li;
}

function imageErrorHandler({ target }) {
  target.remove();
}

function imageLoadHandler({
  target: {
    dataset: { id },
  },
  target,
}) {
  document.getElementById(`wrapper${id}`).append(target);
}


function createCardImage(user) {
  const { firstName, id } = user;
  const imgWrapper = document.createElement("div");
  imgWrapper.setAttribute("id", `wrapper${id}`, `name = ${firstName}`);
  imgWrapper.classList.add("imageWrapper");
  const initials = document.createElement('div');
  initials.classList.add('imagePlaceholder', 'imagePlacement');
  initials.append(document.createTextNode(firstName[0] || ''));
  
  createImage(user);
  
  imgWrapper.append(initials);
  
  return imgWrapper;
}

function createImage({ profilePicture, name, id }) {
  const img = document.createElement("img");
  img.setAttribute("src", profilePicture);
  img.setAttribute("alt", name);
  img.dataset.id = id;
  img.classList.add("cardImage", "imagePlacement");
  img.addEventListener('error', imageErrorHandler);
  img.addEventListener('load', imageLoadHandler);
}



const [icons] = responseData.map((user) => createIcons(user.contacts));


/**
 *
 * @param {Array<string>} contacts
 */
function createIcons(contacts) {
  const arrayOfIconElements = contacts.map((contact) => {
    const { hostname } = new URL(contact);

    if (supportedSocialNetworks.has(hostname)) {
      const srcImg = supportedSocialNetworks.get(hostname);

      const a = document.createElement("a");
      a.setAttribute("href", contact);
      
      const img = document.createElement("img");
      img.setAttribute("src",srcImg);
      a.append(img);
      return a;
    }
    return;
  });

  return arrayOfIconElements;
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
