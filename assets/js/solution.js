"use strict";
/* new URL('https://www.facebook.com/DwayneJohnson'); // {hostname}
new Map().set('www.facebook.com', 'src to fb icon'); // key - hostname
 */

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
  //const divIcons = createElement('div',{classNames:['iconsSocialWrapper']});
  const img = createCardImage(user);
  const article = createElement("article", { classNames: ["cardContainer"] }, [
    img,
    h3,
    h4,
    p,
  ]);
  const li = createElement("li", { classNames: ["cardNames"] }, [article]);
  return li;
}

function createCardImage(user) {
  const { firstName, id } = user;
  const imgWrapper = document.createElement("div");
  imgWrapper.setAttribute("id", `wrapper${id}`, `name = ${firstName}`);
  imgWrapper.classList.add("imageWrapper");
  createImage(user);
  return imgWrapper;
}

function createImage({ profilePicture, name, id }) {
  const img = document.createElement("img");
  img.setAttribute("src", profilePicture);
  img.setAttribute("alt", name);
  img.dataset.id = id;
  img.classList.add("cardImage", "imagePlacement");
}

const supportedSocialNetworks = new Map()
  .set("www.facebook.com", "./assets/icons/facebook.svg")
  .set("twitter.com", "./assets/icons/instagram.svg")
  .set("www.instagram.com", "./assets/icons/twitter.svg");

const [icons] = responseData.map((user) => createIcons(user.contacts));


/**
 *
 * @param {Array<string>} contacts
 */
function createIcons(contacts) {
  const arrayOfIconElements = contacts.map((contact) => {
    const { hostname } = new URL(contact);

    if (supportedSocialNetworks.has(hostname)) {
      const cssClasses = supportedSocialNetworks.get(hostname);

      const a = document.createElement("a");
      a.setAttribute("href", contact);
      a.setAttribute("class", cssClasses);
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
