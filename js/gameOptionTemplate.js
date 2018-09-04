import {getDomElementFromString} from './util.js';
export default (nameOption, width, height, imgSrc, isTriple = false) => {
  const option = (isTriple) ? getDomElementFromString(`<div class="game__option">
  <img src="${imgSrc}" alt="${nameOption}" width="${width}" height="${height}">
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
  const image = option.querySelector(`img`);
  image.addEventListener(`load`, () => {
    const size = resize({width, height}, {width: image.naturalWidth, height: image.naturalHeight});
    image.width = size.width;
    image.height = size.height;
  });
  return option;
};

const resize = (screen, img) => {
  if (screen.width >= img.width) {
    return img;
  }
  const r = screen.width / img.width;
  return {width: screen.width, height: Math.floor(img.height * r)};
};
