import {getDomElementFromString} from './util.js';
import {selectMainScreen as selectScreen} from './selectScreen.js';
import greetingScreen from './greeting.js';

const screen = getDomElementFromString(`<section class="intro">
  <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</section>`);

screen.querySelector(`.intro__asterisk`).addEventListener(`click`, () => selectScreen(greetingScreen));

export default screen;
