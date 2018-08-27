const GAMES_ROUND_COUNT = 10;
const MAX_LIVES_COUNT = 3;
const MAX_ROUND_TIME = 30;
const BLINKED_TIME = 5;

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


export {countPoints, updateLives, switchScreen, Timer};
