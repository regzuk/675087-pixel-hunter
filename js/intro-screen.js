import IntroView from './intro-view.js';
import {show} from './util.js';
import greetingScreen from './greeting-screen.js';

const introView = new IntroView();

introView.onNextScreen = () => {
  greetingScreen(true);
};

export default () => {
  show(introView);
};
