function createUserCardElement(user) {
  const { discription, firstName, lastName } = user;

  const p = createElement("p", { classNames: ["cardDescription"] }, [
    document.createTextNode(discription),
  ]);
  const h3 = createElement("h3", { classNames: ["cardFirstName", "nameMargin"] }, [
    document.createTextNode(firstName),
  ]);
  const h4 = createElement("h4", { classNames: ["cardLastName","nameMargin"] }, [
    document.createTextNode(lastName),
  ]);
  const nameWrapper = createElement('div',{classNames:['nameWrapper']},[h3,h4]);
    const icons = createIcons(user.contacts);
  const divIcons = createElement('div',{classNames:['iconsSocialWrapper']},[...icons]);  
  
  const img = createCardImage(user);
  const article = createElement("article", { classNames: ["cardContainer"] }, [
    img,
    nameWrapper,
    p,
    divIcons,
  ]);
  const li = createElement("li", { classNames: ["cardWrapper"] }, [article]);
  li.setAttribute("name", firstName);
  return li;
}