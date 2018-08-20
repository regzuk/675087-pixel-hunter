import {getDomElementFromString} from './util.js';
import {crossfade as selectScreen} from './selectScreen.js';


const screenTemplate = getDomElementFromString(`<section class="intro">
  <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</section>`);

const getScreen = () => {
  const screen = screenTemplate.cloneNode(true);
  screen.querySelector(`.intro__asterisk`).addEventListener(`click`, () => selectScreen(`greeting`));
  return screen;
};

export default getScreen;
