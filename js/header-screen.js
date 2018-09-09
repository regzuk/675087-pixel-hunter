import HeaderView from './header-view.js';
import {showBefore, removeFirst} from './util.js';
import greetingScreen from './greeting-screen.js';

const headerView = new HeaderView();
headerView.onBack = () => {
  removeFirst();
  greetingScreen();
};


export default {
  show() {
    showBefore(headerView);
  }
};
