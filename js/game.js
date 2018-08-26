/*
  Answer structure
  answer = {
    isCorrect: true,
    time: `fast`
  }
}
*/
const countPoints = (answers, lives) => {
  if (!(answers && answers.length) || answers.length !== 10 || (lives < 0 || lives > 3) ||
  answers.slice().filter((x) => x.isCorrect === true).length < 7) {
    return -1;
  }
  return answers.reduce((points, x) => {
    if (x.isCorrect) {
      points += 100;
      let addPointsMultiple = 0;
      if (x.time === `fast`) {
        addPointsMultiple = 1;
      } else if (x.time === `slow`) {
        addPointsMultiple = -1;
      }
      points += addPointsMultiple * 50;
    }
    return points;
  }, 0) + 50 * lives;
};


export {countPoints};
