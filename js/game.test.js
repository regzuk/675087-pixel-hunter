import {assert} from 'chai';
import {countPoints} from './game.js';

describe(`Game points counting`, () => {
  it(`should return -1 when answers are less than 10`, () => {
    let answers = [{isCorrect: true, time: `slow`},
      {isCorrect: true, time: `slow`},
      {isCorrect: true, time: `slow`},
      {isCorrect: true, time: `slow`}];
    assert.equal(-1, countPoints(answers, 3));
  });
  it(`should return 1150 when 10 correct answers (all middle time), 3 lives`, () => {
    let answers = [{isCorrect: true, time: `middle`},
      {isCorrect: true, time: `middle`},
      {isCorrect: true, time: `middle`},
      {isCorrect: true, time: `middle`},
      {isCorrect: true, time: `middle`},
      {isCorrect: true, time: `middle`},
      {isCorrect: true, time: `middle`},
      {isCorrect: true, time: `middle`},
      {isCorrect: true, time: `middle`},
      {isCorrect: true, time: `middle`}];
    assert.equal(1150, countPoints(answers, 3));
  });
  it(`should return -1 when 6 correct answers, 0 lives`, () => {
    let answers = [{isCorrect: true, time: `slow`},
      {isCorrect: true, time: `slow`},
      {isCorrect: false, time: `slow`},
      {isCorrect: false, time: `slow`},
      {isCorrect: true, time: `slow`},
      {isCorrect: true, time: `slow`},
      {isCorrect: false, time: `slow`},
      {isCorrect: false, time: `slow`},
      {isCorrect: true, time: `slow`},
      {isCorrect: true, time: `slow`}];
    assert.equal(-1, countPoints(answers, 0));
  });
  it(`should return 1650 when 10 correct answers with fast time, 3 lives`, () => {
    let answers = [{isCorrect: true, time: `fast`},
      {isCorrect: true, time: `fast`},
      {isCorrect: true, time: `fast`},
      {isCorrect: true, time: `fast`},
      {isCorrect: true, time: `fast`},
      {isCorrect: true, time: `fast`},
      {isCorrect: true, time: `fast`},
      {isCorrect: true, time: `fast`},
      {isCorrect: true, time: `fast`},
      {isCorrect: true, time: `fast`}];
    assert.equal(1650, countPoints(answers, 3));
  });
  it(`should return 650 when 10 correct answers with slow time, 3 lives`, () => {
    let answers = [{isCorrect: true, time: `slow`},
      {isCorrect: true, time: `slow`},
      {isCorrect: true, time: `slow`},
      {isCorrect: true, time: `slow`},
      {isCorrect: true, time: `slow`},
      {isCorrect: true, time: `slow`},
      {isCorrect: true, time: `slow`},
      {isCorrect: true, time: `slow`},
      {isCorrect: true, time: `slow`},
      {isCorrect: true, time: `slow`}];
    assert.equal(650, countPoints(answers, 3));
  });
  it(`should return 800 when 8 correct answers, 2 with fast time, 3 with middle time, 3 with slow time, 1 lives`, () => {
    let answers = [{isCorrect: true, time: `middle`},
      {isCorrect: true, time: `fast`},
      {isCorrect: true, time: `middle`},
      {isCorrect: true, time: `slow`},
      {isCorrect: false, time: `middle`},
      {isCorrect: true, time: `fast`},
      {isCorrect: true, time: `middle`},
      {isCorrect: true, time: `slow`},
      {isCorrect: false, time: `middle`},
      {isCorrect: true, time: `slow`}];
    assert.equal(800, countPoints(answers, 1));
  });
});
