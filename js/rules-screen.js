import RulesView from './rules-view.js';
import {show} from './util.js';
import header from './header-screen.js';
import Game from './Game.js';

const rulesView = new RulesView();

rulesView.startGame = () => {
  const game = new Game(rulesView.userName);
};

export default () => {
  header.show();
  show(rulesView);
};
