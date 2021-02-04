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
      img.classList.add('icons')
      a.append(img);
      return a;
    }
    return;
  });

  return arrayOfIconElements;
}