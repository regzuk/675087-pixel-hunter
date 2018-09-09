import {AbstractView} from './abstract-view.js';

class RulesView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<section class="rules">
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
</section>`;
  }

  bind() {
    const btn = this.element.querySelector(`.rules__button`);
    btn.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.userName = input.value;
      this.startGame();
    });

    const validateName = (name) => !name.match(/[\s!$%^&*()+|~=`{}\[\]:";'<>?,\/]/);
    const input = this.element.querySelector(`.rules__input`);
    input.addEventListener(`input`, () => {
      input.value = input.value.trim();
      btn.disabled = (input.value.length > 3 && validateName(input.value)) ? false : true;
    });
  }

  startGame() {}
}

export default RulesView;
