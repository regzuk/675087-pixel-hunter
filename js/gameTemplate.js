import {getDomElementFromString} from './util.js';
import getGameOptionTemplate from './gameOptionTemplate';
import selectScreen from './selectScreen.js';
import gameStat from './gameStatTemplate.js';

const GAME_TASK = {
  1: `Угадайте для каждого изображения фото или рисунок?`,
  2: `Угадай, фото или рисунок?`,
  3: `Найдите рисунок среди изображений`,
};
const IMG_SIZE = {
  1: {width: 468, height: 458},
  2: {width: 705, height: 455},
  3: {width: 304, height: 455},
};

const screenTemplate = getDomElementFromString(`<section class="game">
  <p class="game__task"></p>
  <form class="game__content">
  </form>
</section>`);

// const questionData = {
//   type: 1,
//   img: [],
//   correctAnswer: {},
//   answer: answerData,
// };

const getScreen = (question) => {
  const screen = screenTemplate.cloneNode(true);
  const gameForm = screen.querySelector(`.game__content`);
  const gameTask = screen.querySelector(`.game__task`);
  gameTask.text = GAME_TASK[question.type];
  switch (question.type) {
    case 1:
      question.img.forEach((x, i) => gameForm.appendChild(getGameOptionTemplate(`question${i + 1}`, IMG_SIZE[question.type].width, IMG_SIZE[question.type].height, x.src)));
      break;
    case 2:
      gameForm.classList.add(`game__content--wide`);
      gameForm.appendChild(getGameOptionTemplate(`question1`, IMG_SIZE[question.type].width, IMG_SIZE[question.type].height, question.img.src));
      break;
    case 3:
      gameForm.classList.add(`game__content--triple`);
      question.img.forEach((x, i) => gameForm.appendChild(getGameOptionTemplate(`question${i + 1}`, IMG_SIZE[question.type].width, IMG_SIZE[question.type].height, x.src)));
      break;
  }
};

export default getScreen;
