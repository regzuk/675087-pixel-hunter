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

let currentScreen = screens[DEFAULT_SCREEN]();
mainElem.appendChild(currentScreen);

const selectScreen = (screen = DEFAULT_SCREEN) => {
  while (mainElem.firstChild) {
    mainElem.removeChild(mainElem.firstChild);
  }

  switch (screen) {
    case `rules`:
    case `stat`:
      mainElem.appendChild(header());
      break;
    case `gameOne`:
    case `gameTwo`:
    case `gameThree`:
      mainElem.appendChild(header(true));
      break;
  }

  currentScreen = screens[screen]();
  mainElem.appendChild(currentScreen);
};


export default selectScreen;
