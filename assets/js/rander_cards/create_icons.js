/**
 *
 * @param {Array<string>} contacts
 */
function createIcons(contacts) {
  const arrayOfIconElements = contacts.map((contact) => {
    const { hostname } = new URL(contact);

    if (supportedSocialNetworks.has(hostname)) {
      const svg = supportedSocialNetworks.get(hostname);

      const a = document.createElement("a");
      a.setAttribute("href", contact);
      a.classList.add("iconsSocial");
      a.innerHTML = svg;
      return a;
    }
    return;
  });

  return arrayOfIconElements;
}
