import {getDomElementFromString} from './util.js';
import {resize} from './resize.js';

export default (nameOption, width, height, imgSrc, isTriple = false) => {
  const option = (isTriple) ? getDomElementFromString(`<div class="game__option">
  <img src="${imgSrc}" alt="${nameOption}">
</div>`) : getDomElementFromString(`<div class="game__option">
    <img src="${imgSrc}" alt="${nameOption}">
    <label class="game__answer game__answer--photo">
      <input class="visually-hidden" name="${nameOption}" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input class="visually-hidden" name="${nameOption}" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>`);

  const image = option.querySelector(`img`);
  image.addEventListener(`load`, () => {
    const imgSize = resize({width, height}, {width: image.naturalWidth, height: image.naturalHeight});
    image.width = imgSize.width;
    image.height = imgSize.height;
  });

  return option;
};
