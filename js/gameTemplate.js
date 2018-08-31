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

const getScreen = (question = {type: 1}) => {
  const screen = screenTemplate.cloneNode(true);
  const gameForm = screen.querySelector(`.game__content`);
  const gameTask = screen.querySelector(`.game__task`);
  gameTask.text = GAME_TASK[question.type];
  switch (question.type) {
    case 2:
      gameForm.classList.add(`game__content--wide`);
      break;
    case 3:
      gameForm.classList.add(`game__content--triple`);
      break;
  }
  const options = [];
  question.img.forEach((x, i) => {
    options.push(getGameOptionTemplate(`question${i + 1}`, IMG_SIZE[question.type].width, IMG_SIZE[question.type].height, x.src));
    gameForm.appendChild(options[i]);
  });

  if (question.type === 3) {
    Array.from(screen.querySelectorAll(`.game__option`)).forEach((x) => x.addEventListener(`click`, () => {
      x.classList.add(`game__option--selected`);
      selectScreen(`stat`);
    }));
  } else {
    const onRadioChange = (qOptions) => {
      if (qOptions[0].some((x) => x.checked) && qOptions[1].some((x) => x.checked)) {
        selectScreen(`gameTwo`);
      }
    };
    options.map((x, i) => Array.from(x.querySelectorAll(`input[name=question${i + 1}]`))).forEach((y) => y.forEach((z) => z.addEventListener(`change`, () => {
      onRadioChange(y);
    })));
  }
  screen.appendChild(gameStat());
};

export default getScreen;
