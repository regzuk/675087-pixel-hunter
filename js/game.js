import header from './headerTemplate.js';
import gameScreen from './gameTemplate.js';

const GAMES_ROUND_COUNT = 10;
const MAX_LIVES_COUNT = 3;
const MAX_ROUND_TIME = 30;
const BLINKED_TIME = 5;

const DEFAULT_LIVES_COUNT = 3;

/*
  Answer structure
  answer = {
    isCorrect: true,
    time: 15
  }
}
*/
const countPoints = (answers, lives) => {
  if (!Array.isArray(answers) || typeof lives !== `number`) {
    throw new Error(`Invalid data type`);
  }

  const correctAnswers = answers.slice().filter((x) => x.isCorrect === true);

  if (lives < 0 || lives > 3 || answers.length - correctAnswers.length !== MAX_LIVES_COUNT - lives) {
    throw new Error(`Invalid data value`);
  }
  if (answers.length !== GAMES_ROUND_COUNT || correctAnswers.length < 7) {
    return -1;
  }
  return correctAnswers.reduce((points, x) => {
    points += 100;
    let addPointsMultiple = 0;
    if (x.time < 10) {
      addPointsMultiple = 1;
    } else if (x.time > 20) {
      addPointsMultiple = -1;
    }
    points += addPointsMultiple * 50;
    return points;
  }, 0) + 50 * lives;
};

const updateLives = (answer, liveCount) => {
  if (liveCount < 0 || typeof answer.isCorrect !== `boolean`) {
    throw new Error(`Invalid input values`);
  }
  return liveCount - ((answer.isCorrect) ? 0 : 1);
};

/*
  Screen structure
  screen = {
    type: 1,
    ...
  }
}
*/
const switchScreen = (screens, currentScreenNumber) => {
  if (!Array.isArray(screens) || currentScreenNumber < 0 || currentScreenNumber > screens.length) {
    throw new Error(`Invalid input values`);
  }
  return (currentScreenNumber === screens.length - 1) ? -1 : currentScreenNumber + 1;
};

const Timer = function (maxTime = MAX_ROUND_TIME) {
  if (typeof maxTime !== `number`) {
    throw new Error(`Invalid type, input value should be number`);
  }
  if (maxTime <= 0) {
    throw new Error(`Invalid input value, should be a positive`);
  }

  let time = maxTime;
  let isBlinked = false;

  const tick = () => {
    if (time > 0) {
      time--;
    }

    if (time <= BLINKED_TIME) {
      isBlinked = true;
    }

    return {
      time,
      isBlinked
    };
  };

  return {
    tick
  };
};

const getQuestion = (arr) => {
  const type = arr.length;
  if (type > 3) {
    throw new Error(`Invalid pictures count`);
  }

  return {
    type,
    img: arr,
    answer: null
  };
};

const getQuestions = () => {
  const arr = [];
  arr.push(getQuestion([{src: `http://i.imgur.com/1KegWPz.jpg`, type: `photo`},
    {src: `https://i.imgur.com/DiHM5Zb.jpg`, type: `photo`}]));
  arr.push(getQuestion([{src: `https://k32.kn3.net/5C7060EC5.jpg`, type: `paint`}]));
  arr.push(getQuestion([{src: `https://k32.kn3.net/5C7060EC5.jpg`, type: `paint`},
    {src: `https://k42.kn3.net/D2F0370D6.jpg`, type: `paint`},
    {src: `http://i.imgur.com/1KegWPz.jpg`, type: `photo`}]));
  arr.push(getQuestion([{src: `http://i.imgur.com/1KegWPz.jpg`, type: `photo`},
    {src: `https://i.imgur.com/DiHM5Zb.jpg`, type: `photo`}]));
  arr.push(getQuestion([{src: `https://k32.kn3.net/5C7060EC5.jpg`, type: `paint`}]));
  arr.push(getQuestion([{src: `https://k32.kn3.net/5C7060EC5.jpg`, type: `paint`},
    {src: `https://k42.kn3.net/D2F0370D6.jpg`, type: `paint`},
    {src: `http://i.imgur.com/1KegWPz.jpg`, type: `photo`}]));
  arr.push(getQuestion([{src: `http://i.imgur.com/1KegWPz.jpg`, type: `photo`},
    {src: `https://i.imgur.com/DiHM5Zb.jpg`, type: `photo`}]));
  arr.push(getQuestion([{src: `https://k32.kn3.net/5C7060EC5.jpg`, type: `paint`}]));
  arr.push(getQuestion([{src: `https://k32.kn3.net/5C7060EC5.jpg`, type: `paint`},
    {src: `https://k42.kn3.net/D2F0370D6.jpg`, type: `paint`},
    {src: `http://i.imgur.com/1KegWPz.jpg`, type: `photo`}]));
  arr.push(getQuestion([{src: `http://i.imgur.com/1KegWPz.jpg`, type: `photo`},
    {src: `https://i.imgur.com/DiHM5Zb.jpg`, type: `photo`}]));
  return arr;
};

const mainElem = document.querySelector(`#main`);

const Game = {
  user: ``,
  stat: [
    {game: [`fast`, `slow`, `correct`, `fail`, `fast`, `slow`, `correct`, `fail`, `fast`, `slow`], lives: 2},
    {game: [`fast`, `slow`, `correct`, `fail`, `fast`, `slow`, `correct`, `fail`, `fast`, `slow`], lives: 1},
  ],
  lives: DEFAULT_LIVES_COUNT,
  questions: getQuestions(),
  currentQuestion: -1,
  get nextQuestion() {
    this.currentQuestion++;
    return (this.currentQuestion === this.question.length) ? this.question[this.currentQuestion] : -1;
  },
  nextGameScreen() {
    while (mainElem.firstChild) {
      mainElem.removeChild(mainElem.firstChild);
    }
    mainElem.appendChild(header(true));
    mainElem.appendChild(gameScreen(this.nextQuestion));
  },
};

export {countPoints, updateLives, switchScreen, Timer, Game};
