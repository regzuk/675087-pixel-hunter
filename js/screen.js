import introScreen from './introTemplate.js';
import greetingScreen from './greetingTemplate.js';
import rulesScreen from './rulesTemplate.js';
import gameScreen from './gameTemplate.js';
import statScreen from './statTemplate.js';

import headerElem from './headerTemplate.js';

const screens = {
  intro: introScreen,
  greeting: greetingScreen,
  rules: rulesScreen,
  game: gameScreen,
  stat: statScreen,
};

const DEFAULT_SCREEN = `intro`;

const mainElem = document.querySelector(`#main`);

let currentScreen = screens[DEFAULT_SCREEN];
mainElem.appendChild(currentScreen);

const showHeader = () => {
  if (mainElem.firstChild) {
    mainElem.insertBefore(headerElem, mainElem.firstChild);
  } else {
    mainElem.appendChild(headerElem);
  }
};
const hideHeader = () => {
  if (mainElem.firstChild === headerElem) {
    mainElem.removeChild(headerElem);
  }
};

const selectScreen = (screen = DEFAULT_SCREEN, options = null) => {

  mainElem.removeChild(currentScreen);

  currentScreen = (screen === `game`) ? screens[screen](options) : screens[screen];
  mainElem.appendChild(currentScreen);

  if (screen === `rules`) {
    showHeader();
  } else if (screen === `greeting`) {
    hideHeader();
  }
};

const crossfade = (screen = DEFAULT_SCREEN) => {
  const oldScreen = currentScreen;
  oldScreen.style.position = `absolute`;
  oldScreen.style.zIndex = `10`;
  oldScreen.style.transition = `opacity 1s ease-in-out`;
  oldScreen.style.opacity = `0`;
  currentScreen = screens[screen];
  mainElem.appendChild(currentScreen);
  oldScreen.addEventListener(`transitionend`, () => {
    mainElem.removeChild(oldScreen);
  });
};


export default selectScreen;
export {crossfade};
