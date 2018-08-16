import {getDomElementFromString} from './util.js';
import selectScreen from './selectScreen.js';

const screenTemplate = getDomElementFromString(`<section class="rules">
  <h2 class="rules__title">Правила</h2>
  <ul class="rules__description">
    <li>Угадай 10 раз для каждого изображения фото
      <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> или рисунок
      <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
    <li>Фотографиями или рисунками могут быть оба изображения.</li>
    <li>На каждую попытку отводится 30 секунд.</li>
    <li>Ошибиться можно не более 3 раз.</li>
  </ul>
  <p class="rules__ready">Готовы?</p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
</section>`);

const getScreen = () => {
  const screen = screenTemplate.cloneNode(true);

  const rulesBtn = screen.querySelector(`.rules__button`);
  rulesBtn.addEventListener(`click`, () => selectScreen(`gameOne`));

  const rulesInput = screen.querySelector(`.rules__input`);
  rulesInput.addEventListener(`input`, () => {
    rulesBtn.disabled = (rulesInput.value !== ``) ? false : true;
  });

  return screen;
};

export default getScreen;
