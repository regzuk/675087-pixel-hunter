import IntroView from './intro-view.js';
import {show} from './util.js';
import greetingScreen from './greeting-screen.js';

export default () => {
  const introView = new IntroView();

  introView.onNextScreen = () => {
    greetingScreen(true);
  };

  show(introView);
};
