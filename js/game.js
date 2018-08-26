const MAX_ROUND_TIME = 30;

/*
  Answer structure
  answer = {
    isCorrect: true,
    time: 15
  }
}
*/
const countPoints = (answers, lives) => {
  if (!Array.isArray(answers) || answers.length !== 10 || (lives < 0 || lives > 3) ||
  answers.slice().filter((x) => x.isCorrect === true).length < 7) {
    return -1;
  }
  return answers.slice().reduce((points, x) => {
    if (x.isCorrect) {
      points += 100;
      let addPointsMultiple = 0;
      if (x.time < 10) {
        addPointsMultiple = 1;
      } else if (x.time > 20) {
        addPointsMultiple = -1;
      }
      points += addPointsMultiple * 50;
    }
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

    if (time <= 5) {
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
