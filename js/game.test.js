import {assert} from 'chai';
import {countPoints} from './game.js';

describe(`Game points counting`, () => {
  it(`should return -1 when answers are less than 10`, () => {
    assert.equal(-1, countPoints());
  });
  it(`should return 1150 when all answers are correct with middle time and user have 3 lives`, () => {
    assert.equal(1150, countPoints());
  });
});
