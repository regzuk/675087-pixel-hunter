import introScreen from './introTemplate.js';
import greetingScreen from './greetingTemplate.js';
import rulesScreen from './rulesTemplate.js';
import gameOneScreen from './gameTemplate-1.js';
import gameTwoScreen from './gameTemplate-2.js';
import gameThreeScreen from './gameTemplate-3.js';
import statScreen from './statTemplate.js';

import header from './headerTemplate.js';

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

const crossfade = (screen = DEFAULT_SCREEN) => {
  const oldScreen = currentScreen;
  oldScreen.style.position = `absolute`;
  oldScreen.style.zIndex = `10`;
  oldScreen.style.transition = `opacity 1s ease-in-out`;
  oldScreen.style.opacity = `0`;
  currentScreen = screens[screen]();
  mainElem.appendChild(currentScreen);
  oldScreen.addEventListener(`transitionend`, () => {
    mainElem.removeChild(oldScreen);
  });
};


export default selectScreen;
export {crossfade};
