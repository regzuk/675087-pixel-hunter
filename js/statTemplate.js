import {getDomElementFromString} from './util.js';
import gameStat from './gameStatTemplate.js';
import {countPoints, Game} from './game.js';

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


const statTableTemplate = (number, answers, lives) => {
  const points = countPoints(answers, lives);
  const table = document.createElement(`table`);
  table.classList.add(`result__table`);
  table.insertAdjacentHTML(`beforeend`, `<tr>
    <td class="result__number">${number}.</td>
    <td colspan="2">
    </td>
    <td class="result__points">× 100</td>
    <td class="result__total">${answers.filter((x) => x.isCorrect).length}</td>
  </tr>`);
  table.querySelector(`td:not([class])`).appendChild(gameStat(answers));
  if (answers.length === 10 && answers.filter((x) => !x.isCorrect).length < 4) {
    const fastCount = answers.filter((x) => x.isCorrect && x.time < 10).length;
    if (fastCount > 0) {
      table.insertAdjacentHTML(`beforeend`, bonusRowTemplate(FAST_BONUS_STR, `fast`, fastCount));
    }
    if (lives > 0) {
      table.insertAdjacentHTML(`beforeend`, bonusRowTemplate(LIVE_BONUS_STR, `alive`, lives));
    }
    const slowCount = answers.filter((x) => x.isCorrect && x.time > 20).length;
    if (slowCount > 0) {
      table.insertAdjacentHTML(`beforeend`, bonusRowTemplate(SLOW_BONUS_STR, `slow`, slowCount));
    }
  }
  table.insertAdjacentHTML(`beforeend`, `<tr>
    <td colspan="5" class="result__total  result__total--final">${(points > 0) ? points : `FAIL`}</td>
  </tr>`);
  return table;
};

const screenTemplate = getDomElementFromString(`<section class="result">
  <h2 class="result__title">Победа!</h2>

</section>`);


const updateStat = () => {
  while (screenTemplate.firstChild) {
    screenTemplate.removeChild(screenTemplate.firstChild);
  }
  screenTemplate.appendChild(statTableTemplate(1, Game.answers, Game.lives));
  Game.stat.forEach((x, i) => screenTemplate.appendChild(statTableTemplate(i + 2, x.game, x.lives)));
};

export default screenTemplate;
export {updateStat};
