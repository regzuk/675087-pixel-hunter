import {getDomElementFromString} from './util.js';
export default (nameOption, width, height, imgSrc, isTriple = false) => (isTriple) ? getDomElementFromString(`<div class="game__option">
  <img src=""${imgSrc}"" alt="${nameOption}" width="${width}" height="${height}">
</div>`) : getDomElementFromString(`<div class="game__option">
    <img src="${imgSrc}" alt="${nameOption}" width="${width}" height="${height}">
    <label class="game__answer game__answer--photo">
      <input class="visually-hidden" name="${nameOption}" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input class="visually-hidden" name="${nameOption}" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>`);
