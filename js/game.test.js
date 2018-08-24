import {assert} from 'chai';
import {countPoints} from './game.js';

describe(`Game points counting`, () => {
  it(`should return -1 when answers are less than 10`, () => {
    assert.equal(-1, countPoints());
  });
  it(`should return 1150 when 10 correct answers (all middle time), 3 lives`, () => {
    assert.equal(1150, countPoints());
  });
  it(`should return -1 when 6 correct answers, 0 lives`, () => {
    assert.equal(-1, countPoints());
  });
  it(`should return 1650 when 10 correct answers with fast time, 3 lives`, () => {
    assert.equal(1650, countPoints());
  });
  it(`should return 650 when 10 correct answers with slow time, 3 lives`, () => {
    assert.equal(650, countPoints());
  });
  it(`should return 800 when 8 correct answers, 2 with fast time, 3 with middle time, 3 with slow time, 1 lives`, () => {
    assert.equal(800, countPoints());
  });
});
