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