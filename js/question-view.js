import {AbstractView} from './abstract-view.js';
import OptionView from './option-view.js';

const GAME_TASK = {
  normal: `Угадайте для каждого изображения фото или рисунок?`,
  wide: `Угадай, фото или рисунок?`,
  triplePainting: `Найдите рисунок среди фотографий`,
  triplePhoto: `Найдите фотографию среди рисунков`,
};

class QuestionView extends AbstractView {
  constructor(question) {
    super();
    this.type = question.type;
    this.img = question.img;
    this.answer = this.img.map((x) => ({correct: x.type, answer: undefined}));
  }

  get template() {
    return `<section class="game">
      <p class="game__task"></p>
      <form class="game__content">
      </form>
    </section>`;
  }

  get element() {
    if (!this._element) {
      this.render();
      this.bind();
      this.addTitle();
      this.addOptions();
    }
    return this._element;
  }

  bind() {}

  addTitle() {
    const title = this.element.querySelector(`p.game__task`);
    if (this.type !== `triple`) {
      title.innerHTML = GAME_TASK[this.type];
    } else {
      title.innerHTML = GAME_TASK[(this.img.filter((x) => x.type === `photo`).length === 1) ? `triplePhoto` : `triplePainting`];
    }
  }

  addOptions() {
    const gameContent = this.element.querySelector(`.game__content`);

    const options = this.img.map((x, i) => OptionView.getOption(this.type, x.imgSrc, i));
    options.forEach((x) => {
      x.isCorrect = (name, value) => {
        this.answer[name].answer = value;
        if (this.answer.filter((y) => y.answer === undefined).length === 0) {
          const isCorrect = this.answer.filter((z) => z.answer !== z.correct).length === 0;
          this.checkAnswer({isCorrect, time: 15});
        }
      };
    });
    options.forEach((x) => gameContent.appendChild(x.element));
  }
}

export default QuestionView;
