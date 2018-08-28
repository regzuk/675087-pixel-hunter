import {getDomElementFromString} from './util.js';
import gameStat from './gameStat.js';

const FAST_BONUS_STR = `Бонус за скорость`;
const LIVE_BONUS_STR = `Бонус за жизни`;
const SLOW_BONUS_STR = `Штраф за медлительность`;

const gameStatRowTemplate = (number) => {
  const rowTemplate = getDomElementFromString(`<tr>
    <td class="result__number">${number}</td>
    <td colspan="2">
    </td>
    <td class="result__points">× 100</td>
    <td class="result__total">900</td>
  </tr>`, `table`);
  rowTemplate.querySelector(`td:not([class])`).appendChild(gameStat());
  return rowTemplate;
};

const gameBonusTemplate = (str, imgStr, count) => {
  const bonusTemplate = getDomElementFromString(`<tr>
    <td></td>
    <td class="result__extra">${str}:</td>
    <td class="result__extra">${Math.abs(count)} <span class="stats__result stats__result--${imgStr}"></span></td>
    <td class="result__points">× 50</td>
    <td class="result__total">${count * 50}</td>
  </tr>`, `table`);
  return bonusTemplate;
};

const statTableTemplate = (number, result, fastBonus = 0, slowBonus = 0, liveBonus = 0) => {
  const table = document.createElement(`table`);
  table.classList.add(`result__table`);
  table.appendChild(gameStatRowTemplate(number));
  if (fastBonus > 0) {
    table.appendChild(gameBonusTemplate(FAST_BONUS_STR, `fast`, fastBonus));
  }
  if (liveBonus > 0) {
    table.appendChild(gameBonusTemplate(LIVE_BONUS_STR, `alive`, liveBonus));
  }
  if (slowBonus > 0) {
    table.appendChild(gameBonusTemplate(SLOW_BONUS_STR, `slow`, slowBonus));
  }
  table.appendChild(getDomElementFromString(`<tr>
    <td colspan="5" class="result__total  result__total--final">${result}</td>
  </tr>`));
};

const screenTemplate = getDomElementFromString(`<section class="result">
  <h2 class="result__title">Победа!</h2>
  <table class="result__table">
    <tr>
      <td class="result__number">1.</td>
      <td colspan="2">
      </td>
      <td class="result__points">× 100</td>
      <td class="result__total">900</td>
    </tr>
    <tr>
      <td></td>
      <td class="result__extra">Бонус за скорость:</td>
      <td class="result__extra">1 <span class="stats__result stats__result--fast"></span></td>
      <td class="result__points">× 50</td>
      <td class="result__total">50</td>
    </tr>
    <tr>
      <td></td>
      <td class="result__extra">Бонус за жизни:</td>
      <td class="result__extra">2 <span class="stats__result stats__result--alive"></span></td>
      <td class="result__points">× 50</td>
      <td class="result__total">100</td>
    </tr>
    <tr>
      <td></td>
      <td class="result__extra">Штраф за медлительность:</td>
      <td class="result__extra">2 <span class="stats__result stats__result--slow"></span></td>
      <td class="result__points">× 50</td>
      <td class="result__total">-100</td>
    </tr>
    <tr>
      <td colspan="5" class="result__total  result__total--final">950</td>
    </tr>
  </table>
  <table class="result__table">
    <tr>
      <td class="result__number">2.</td>
      <td>
      </td>
      <td class="result__total"></td>
      <td class="result__total  result__total--final">fail</td>
    </tr>
  </table>
  <table class="result__table">
    <tr>
      <td class="result__number">3.</td>
      <td colspan="2">
      </td>
      <td class="result__points">× 100</td>
      <td class="result__total">900</td>
    </tr>
    <tr>
      <td></td>
      <td class="result__extra">Бонус за жизни:</td>
      <td class="result__extra">2 <span class="stats__result stats__result--alive"></span></td>
      <td class="result__points">× 50</td>
      <td class="result__total">100</td>
    </tr>
    <tr>
      <td colspan="5" class="result__total  result__total--final">950</td>
    </tr>
  </table>
</section>`);

screenTemplate.appendChild(statTableTemplate(1, 950, 1, 1, 2));

// Array.from(screenTemplate.querySelectorAll(`.result__table`))
// .forEach((x) => x.querySelector(`tr:first-child`).querySelector(`td:not([class])`).appendChild(gameStat()));

const getScreen = () => {
  const screen = screenTemplate.cloneNode(true);
  return screen;
};

export default getScreen;
