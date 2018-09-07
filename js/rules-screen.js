import RulesView from './rules-view.js';
import {show} from './util.js';
// import greetingScreen from './greeting-screen.js';

export default () => {
  const rulesView = new RulesView();

  rulesView.startGame = () => {
    alert(`start`);
  };

  show(rulesView);
};
