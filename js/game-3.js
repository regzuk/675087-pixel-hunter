import {getDomElementFromString} from './util.js';
import selectScreen from './selectScreen.js';
import gameStat from './gameStat.js';

const IMG_WIDTH = 304;
const IMG_HEIGHT = 455;

const getGameOptionTemplate = () => getDomElementFromString(`<div class="game__option">
  <img src="http://placehold.it/304x455" alt="Option 1" width="${IMG_WIDTH}" height="${IMG_HEIGHT}">
</div>`);

const screenTemplate = getDomElementFromString(`<section class="game">
  <p class="game__task">Найдите рисунок среди изображений</p>
  <form class="game__content  game__content--triple">
  </form>
</section>`);

const gameForm = screenTemplate.querySelector(`.game__content`);
gameForm.appendChild(getGameOptionTemplate());
gameForm.appendChild(getGameOptionTemplate());
gameForm.appendChild(getGameOptionTemplate());

screenTemplate.appendChild(gameStat());

const getScreen = () => {
  const screen = screenTemplate.cloneNode(true);
  Array.from(screen.querySelectorAll(`.game__option`)).forEach((x) => x.addEventListener(`click`, () => {
    x.classList.add(`game__option--selected`);
    selectScreen(`stat`);
  }));
  return screen;
};

export default getScreen;
