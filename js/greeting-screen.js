import GreetingView from './greeting-view.js';
import {show, crossfadeShow} from './util.js';
import rulesScreen from './rules-screen.js';

export default (isCrossfade = false) => {
  const greetingView = new GreetingView();

  greetingView.onNextScreen = () => {
    rulesScreen();
  };

  if (isCrossfade) {
    crossfadeShow(greetingView);
  } else {
    show(greetingView);
  }
};
