import {getDomElementFromString} from './util.js';
import selectScreen from './selectScreen.js';

const backButton = getDomElementFromString(`<button class="back">
  <span class="visually-hidden">Вернуться к началу</span>
  <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
    <use xlink:href="img/sprite.svg#arrow-left"></use>
  </svg>
  <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
    <use xlink:href="img/sprite.svg#logo-small"></use>
  </svg>
</button>`);

const timer = getDomElementFromString(`<div class="game__timer">NN</div>`);
const lifes = getDomElementFromString(`<div class="game__lives">
  <img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">
  <img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">
  <img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">
</div>`);

const headerTemplate = document.createElement(`header`);
headerTemplate.classList.add(`header`);
headerTemplate.appendChild(backButton);


const getDOM = (withStat = false) => {
  const header = headerTemplate.cloneNode(true);
  header.querySelector(`button`).addEventListener(`click`, () => selectScreen(`greeting`));
  if (withStat) {
    header.appendChild(timer.cloneNode(true));
    header.appendChild(lifes.cloneNode(true));
  }
  return header;
};

export default getDOM;
