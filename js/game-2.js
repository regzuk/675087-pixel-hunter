import {getDomElementFromString} from './util.js';
import selectScreen from './selectScreen.js';
import gameStat from './gameStat.js';

const screenTemplate = getDomElementFromString(`<section class="game">
  <p class="game__task">Угадай, фото или рисунок?</p>
  <form class="game__content  game__content--wide">
    <div class="game__option">
      <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
      <label class="game__answer  game__answer--photo">
        <input class="visually-hidden" name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--paint">
        <input class="visually-hidden" name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  </form>
</section>`);

screenTemplate.appendChild(gameStat());

const getScreen = () => {
  const screen = screenTemplate.cloneNode(true);
  Array.from(screen.querySelectorAll(`input[name=question1]`)).forEach((x) => x.addEventListener(`change`, () => selectScreen(`gameThree`)));
  return screen;
};

export default getScreen;
