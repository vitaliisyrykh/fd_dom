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
  li.setAttribute("name", firstName);
  return li;
}