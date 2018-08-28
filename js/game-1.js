import {getDomElementFromString} from './util.js';
import getGameOptionTemplate from './gameOptionTemplate';
import selectScreen from './selectScreen.js';
import gameStat from './gameStat.js';

const IMG_WIDTH = 468;
const IMG_HEIGHT = 458;

const screenTemplate = getDomElementFromString(`<section class="game">
  <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
  <form class="game__content">
  </form>
</section>`);

const gameForm = screenTemplate.querySelector(`.game__content`);
gameForm.appendChild(getGameOptionTemplate(`question1`, IMG_WIDTH, IMG_HEIGHT));
gameForm.appendChild(getGameOptionTemplate(`question2`, IMG_WIDTH, IMG_HEIGHT));
screenTemplate.appendChild(gameStat());

const getScreen = () => {
  const screen = screenTemplate.cloneNode(true);

  const getQuestionOptions = (name) => Array.from(screen.querySelectorAll(`input[name=${name}]`));
  const question1 = getQuestionOptions(`question1`);
  const question2 = getQuestionOptions(`question2`);
  const onRadioChange = () => {
    if (question1.some((x) => x.checked) && question2.some((x) => x.checked)) {
      selectScreen(`gameTwo`);
    }
  };
  question1.forEach((x) => x.addEventListener(`change`, onRadioChange));
  question2.forEach((x) => x.addEventListener(`change`, onRadioChange));

  return screen;
};

export default getScreen;
