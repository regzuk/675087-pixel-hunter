import {getDomElementFromString} from './util.js';
import selectScreen from './selectScreen.js';
import gameStat from './gameStat.js';

const screenTemplate = getDomElementFromString(`<section class="game">
  <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
  <form class="game__content">
    <div class="game__option">
      <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input class="visually-hidden" name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input class="visually-hidden" name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
    <div class="game__option">
      <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
      <label class="game__answer  game__answer--photo">
        <input class="visually-hidden" name="question2" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--paint">
        <input class="visually-hidden" name="question2" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  </form>
</section>`);

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
