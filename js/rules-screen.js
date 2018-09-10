import RulesView from './rules-view.js';
import {show} from './util.js';
import header from './header-screen.js';
import Game from './game.js';

const rulesView = new RulesView();

rulesView.startGame = () => {
  Game.start(rulesView.userName);
};

export default () => {
  header.show();
  show(rulesView);
};
