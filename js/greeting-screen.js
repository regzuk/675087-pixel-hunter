import GreetingView from './greeting-view.js';
import {show, crossfadeShow} from './util.js';
import rulesScreen from './rules-screen.js';

const greetingView = new GreetingView();

greetingView.onNextScreen = () => {
  rulesScreen();
};

export default (isCrossfade = false) => {
  if (isCrossfade) {
    crossfadeShow(greetingView);
  } else {
    show(greetingView);
  }
};
