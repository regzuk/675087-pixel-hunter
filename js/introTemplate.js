import {getDomElementFromString} from './util.js';
import {crossfade as selectScreen} from './screen.js';


const screenTemplate = getDomElementFromString(`<section class="intro">
  <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</section>`);
screenTemplate.querySelector(`.intro__asterisk`).addEventListener(`click`, () => selectScreen(`greeting`));

export default screenTemplate;
