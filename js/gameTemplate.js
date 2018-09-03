import {getDomElementFromString} from './util.js';
import getGameOptionTemplate from './gameOptionTemplate';
import selectScreen from './screen.js';
import gameStat from './gameStatTemplate.js';
import {Game} from './game.js';

const GAME_TASK = {
  1: `Угадайте для каждого изображения фото или рисунок?`,
  2: `Угадай, фото или рисунок?`,
  3: `Найдите рисунок среди фотографий`,
  4: `Найдите фотографию среди рисунков`,
};
const IMG_SIZE = {
  2: {width: 468, height: 458},
  1: {width: 705, height: 455},
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
  if (question.type === 3 && question.img.filter((x) => x.type === `photo`).length === 1) {
    gameTask.innerHTML = GAME_TASK[question.type + 1];
  } else {
    gameTask.innerHTML = GAME_TASK[question.type];
  }
  switch (question.type) {
    case 1:
      gameForm.classList.add(`game__content--wide`);
      break;
    case 3:
      gameForm.classList.add(`game__content--triple`);
      break;
  }
  const options = [];
  const isTriple = question.img.length === 3;
  question.img.forEach((x, i) => {
    options.push(getGameOptionTemplate(`question${i + 1}`, IMG_SIZE[question.type].width, IMG_SIZE[question.type].height, x.src, isTriple));
    gameForm.appendChild(options[i]);
  });

  if (question.type === 3) {
    Array.from(screen.querySelectorAll(`.game__option`)).forEach((x, i) => x.addEventListener(`click`, () => {
      x.classList.add(`game__option--selected`);
      Game.checkAnswer(i);
    }));
  } else {
    const onRadioChange = (qOptions) => {
      const answer = qOptions.map((x) => x.reduce((y, z) => {
        if (z.checked) {
          return z.value;
        }
        return y || undefined;
      }, undefined));
      if (answer.every((x) => x !== undefined)) {
        Game.checkAnswer(answer);
      }
    };
    const inputOptions = options.map((x) => Array.from(x.querySelectorAll(`input`)));
    inputOptions.forEach((x) => x.forEach((y) => y.addEventListener(`change`, () => onRadioChange(inputOptions))));
  }
  screen.appendChild(gameStat());
  return screen;
};

export default getScreen;
