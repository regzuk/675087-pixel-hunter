import {getDomElementFromString} from './util.js';
import getGameOptionTemplate from './gameOptionTemplate';
import selectScreen from './selectScreen.js';
import gameStat from './gameStat.js';

const IMG_WIDTH = 705;
const IMG_HEIGHT = 455;

const screenTemplate = getDomElementFromString(`<section class="game">
  <p class="game__task">Угадай, фото или рисунок?</p>
  <form class="game__content  game__content--wide">
  </form>
</section>`);

const gameForm = screenTemplate.querySelector(`.game__content`);
gameForm.appendChild(getGameOptionTemplate(`question1`, IMG_WIDTH, IMG_HEIGHT));
screenTemplate.appendChild(gameStat());

const getScreen = () => {
  const screen = screenTemplate.cloneNode(true);
  Array.from(screen.querySelectorAll(`input[name=question1]`)).forEach((x) => x.addEventListener(`change`, () => selectScreen(`gameThree`)));
  return screen;
};

export default getScreen;
