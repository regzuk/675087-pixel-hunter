import {AbstractView} from './abstract-view.js';

const IMG_SIZE = {
  normal: {width: 468, height: 458},
  wide: {width: 705, height: 455},
  triple: {width: 304, height: 455},
};

class OptionView extends AbstractView {
  constructor(img, i) {
    super();
    // this.questionType = type;
    // this.imgType = img.type;
    this.src = img;
    this.name = `question${i}`;
    this.size = IMG_SIZE[`normal`];
    this.id = i;
  }

  get template() {
    return `<div class="game__option">
        <img src="${this.src}" alt="${this.name}" width="${this.size.width}" height="${this.size.height}">
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden" name="${this.name}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden" name="${this.name}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>`;
  }

  bind() {
    Array.from(this.element.querySelectorAll(`label`)).forEach((x) => {
      x.addEventListener(`click`, this.isCorrect(this.id, x.querySelector(`input`).value));
    });
  }

  static getOption(type, img, name) {
    switch (type) {
      case `triple`:
        return new TripleOptionView(img, name);
      case `wide`:
        return new WideOptionView(img, name);
      default:
        return new OptionView(img, name);
    }
  }
}

class WideOptionView extends OptionView {
  constructor(img, i) {
    super(img, i);
    this.size = IMG_SIZE[`wide`];
  }
}

class TripleOptionView extends OptionView {
  constructor(img, i) {
    super(img, i);
    this.size = IMG_SIZE[`triple`];
  }

  get template() {
    return `<div class="game__option">
      <img src="${this.src}" alt="${this.name}" width="${this.size.width}" height="${this.size.height}">
    </div>`;
  }

  bind() {
    this.element.querySelector(`img`).addEventListener(`click`, this.isCorrectTriple(this.id));
  }
}

export default OptionView;
