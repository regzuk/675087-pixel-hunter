import {getDomElementFromString} from './util.js';
import gameStat from './gameStatTemplate.js';

const FAST_BONUS_STR = `Бонус за скорость`;
const LIVE_BONUS_STR = `Бонус за жизни`;
const SLOW_BONUS_STR = `Штраф за медлительность`;

const bonusRowTemplate = (str, bonusType, bonus) => `<tr>
  <td></td>
  <td class="result__extra">${str}:</td>
  <td class="result__extra">${Math.abs(bonus)} <span class="stats__result stats__result--${bonusType}"></span></td>
  <td class="result__points">× 50</td>
  <td class="result__total">${bonus * 50}</td>
</tr>`;


const statTableTemplate = (number, result, fastBonus = 0, slowBonus = 0, liveBonus = 0) => {
  const table = document.createElement(`table`);
  table.classList.add(`result__table`);
  table.insertAdjacentHTML(`beforeend`, `<tr>
    <td class="result__number">${number}.</td>
    <td colspan="2">
    </td>
    <td class="result__points">× 100</td>
    <td class="result__total">${result}</td>
  </tr>`);
  table.querySelector(`td:not([class])`).appendChild(gameStat());
  if (fastBonus !== 0) {
    table.insertAdjacentHTML(`beforeend`, bonusRowTemplate(FAST_BONUS_STR, `fast`, 1));
  }
  if (liveBonus !== 0) {
    table.insertAdjacentHTML(`beforeend`, bonusRowTemplate(LIVE_BONUS_STR, `alive`, 2));
  }
  if (slowBonus !== 0) {
    table.insertAdjacentHTML(`beforeend`, bonusRowTemplate(SLOW_BONUS_STR, `slow`, -1));
  }
  if (result !== `fail`) {
    table.insertAdjacentHTML(`beforeend`, `<tr>
      <td colspan="5" class="result__total  result__total--final">${result + fastBonus * 50 + liveBonus * 50 - slowBonus * 50}</td>
    </tr>`);
  }
  return table;
};

const screenTemplate = getDomElementFromString(`<section class="result">
  <h2 class="result__title">Победа!</h2>

</section>`);

screenTemplate.appendChild(statTableTemplate(1, 900, 1, 1, 2));
screenTemplate.appendChild(statTableTemplate(2, `fail`));
screenTemplate.appendChild(statTableTemplate(3, 900, 1, 1, 2));

const getScreen = () => {
  const screen = screenTemplate.cloneNode(true);
  return screen;
};

export default getScreen;
