import {getDomElementFromString} from './util.js';
import selectScreen from './screen.js';
import {DEFAULT_LIVES_COUNT} from './game.js';

// const lifeAlt = `Life`;
const missedLifeAlt = `Missed Life`;

const backButton = getDomElementFromString(`<button class="back">
  <span class="visually-hidden">Вернуться к началу</span>
  <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
    <use xlink:href="img/sprite.svg#arrow-left"></use>
  </svg>
  <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
    <use xlink:href="img/sprite.svg#logo-small"></use>
  </svg>
</button>`);

const timer = getDomElementFromString(`<div class="game__timer">15</div>`);
// const life = getDomElementFromString(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`);
const lives = document.createElement(`div`);
lives.classList.add(`game__lives`);
for (let i = 0; i < 3; i++) {
  lives.appendChild(getDomElementFromString(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`));
}

const headerTemplate = document.createElement(`header`);
headerTemplate.classList.add(`header`);

backButton.addEventListener(`click`, () => selectScreen(`greeting`));

headerTemplate.appendChild(backButton);

const showGameHeaderStat = () => {
  headerTemplate.appendChild(timer);
  headerTemplate.appendChild(lives);
};

const hideGameHeaderStat = () => {
  headerTemplate.removeChild(timer);
  headerTemplate.removeChild(lives);
};

const updateHeaderLives = (currentLivesCount) => {
  Array.from(lives.querySelectorAll(`img`)).filter((x, i) => i < DEFAULT_LIVES_COUNT - currentLivesCount).forEach((y) => {
    y.src = `img/heart__empty.svg`;
    y.alt = missedLifeAlt;
  });
};

export default headerTemplate;
export {showGameHeaderStat, hideGameHeaderStat, updateHeaderLives};
