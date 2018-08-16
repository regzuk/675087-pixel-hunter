import introScreen from './intro.js';
import greetingScreen from './greeting.js';
import rulesScreen from './rules.js';
import gameOneScreen from './game-1.js';
import gameTwoScreen from './game-2.js';
import gameThreeScreen from './game-3.js';
import statScreen from './stats.js';

import header from './header.js';

const screens = {
  intro: introScreen,
  greeting: greetingScreen,
  rules: rulesScreen,
  gameOne: gameOneScreen,
  gameTwo: gameTwoScreen,
  gameThree: gameThreeScreen,
  stat: statScreen
};

const DEFAULT_SCREEN = `intro`;

const mainElem = document.querySelector(`#main`);
mainElem.appendChild(header.elem);
header.elem.querySelector(`button`).addEventListener(`click`, () => selectScreen(`greeting`));

let currentScreen = screens[DEFAULT_SCREEN]();
mainElem.appendChild(currentScreen);

const selectScreen = (screen = DEFAULT_SCREEN) => {
  mainElem.removeChild(currentScreen);
  currentScreen = screens[screen]();
  mainElem.appendChild(currentScreen);
  switch (screen) {
    case `gameOne`:
    case `gameTwo`:
    case `gameThree`:
      header.show();
      header.showStat();
      break;
    case `rules`:
    case `stat`:
      header.show();
      header.hideStat();
      break;
    case `intro`:
    case `greeting`:
      header.hide();
  }
};


export default selectScreen;
