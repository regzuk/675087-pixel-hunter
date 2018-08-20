import {getDomElementFromString} from './util.js';
import selectScreen from './selectScreen.js';
import gameStat from './gameStat.js';

const screenTemplate = getDomElementFromString(`<section class="game">
  <p class="game__task">Найдите рисунок среди изображений</p>
  <form class="game__content  game__content--triple">
    <div class="game__option">
      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option  game__option--selected">
      <img src="http://placehold.it/304x455" alt="Option 2" width="304" height="455">
    </div>
    <div class="game__option">
      <img src="http://placehold.it/304x455" alt="Option 3" width="304" height="455">
    </div>
  </form>
</section>`);

screenTemplate.appendChild(gameStat());

const getScreen = () => {
  const screen = screenTemplate.cloneNode(true);
  Array.from(screen.querySelectorAll(`.game__option`)).forEach((x) => x.addEventListener(`click`, () => selectScreen(`stat`)));
  return screen;
};

export default getScreen;
