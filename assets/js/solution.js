'use strict';
/* new URL('https://www.facebook.com/DwayneJohnson'); // {hostname}
new Map().set('www.facebook.com', 'src to fb icon'); // key - hostname
 */

const cardContainer = document.getElementById('root');

const cards = responseData.map((user)=>createUserCardElement(user));

function createUserCardElement(user){
  const {discription, firstName, id, lastName}=user;
 
  const p = createElement('p',{ classNames:['cardDescription']},[document.createTextNode(discription)]);
  const h3 = createElement('h3',{classNames:['cardFirstName']},document.createTextNode(firstName));
  const h4 = createElement('h4',{classNames:['cardSurName']}, document.createTextNode(surName));
};


