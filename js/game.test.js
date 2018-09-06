// import {assert} from 'chai';
// import {countPoints, updateLives, switchScreen, Timer} from './game.js';
//
// describe(`Game points counting`, () => {
//   it(`Invalid data exceptions`, () => {
//     assert.throw(() => countPoints(`answer`, 1), `Invalid data type`);
//     assert.throw(() => countPoints([{isCorrect: true, time: 25}], `1`), `Invalid data type`);
//   });
//   it(`Invalid value exceptions`, () => {
//     let answers = [{isCorrect: true, time: 15},
//       {isCorrect: true, time: 5},
//       {isCorrect: true, time: 15},
//       {isCorrect: true, time: 25},
//       {isCorrect: false, time: 15},
//       {isCorrect: true, time: 5},
//       {isCorrect: true, time: 15},
//       {isCorrect: true, time: 25},
//       {isCorrect: false, time: 15},
//       {isCorrect: true, time: 25}];
//     assert.throw(() => countPoints(answers.slice(1), 4), `Invalid data value`);
//     assert.throw(() => countPoints(answers, 4), `Invalid data value`);
//     assert.throw(() => countPoints(answers, -1), `Invalid data value`);
//     assert.throw(() => countPoints(answers, 2), `Invalid data value`);
//   });
//   it(`should return -1 when answers are less than 10`, () => {
//     let answers = [{isCorrect: true, time: 25},
//       {isCorrect: true, time: 25},
//       {isCorrect: true, time: 25},
//       {isCorrect: true, time: 25}];
//     assert.equal(-1, countPoints(answers, 3));
//   });
//   it(`should return 1150 when 10 correct answers (all middle time), 3 lives`, () => {
//     let answers = [{isCorrect: true, time: 15},
//       {isCorrect: true, time: 15},
//       {isCorrect: true, time: 15},
//       {isCorrect: true, time: 15},
//       {isCorrect: true, time: 15},
//       {isCorrect: true, time: 15},
//       {isCorrect: true, time: 15},
//       {isCorrect: true, time: 15},
//       {isCorrect: true, time: 15},
//       {isCorrect: true, time: 15}];
//     assert.equal(1150, countPoints(answers, 3));
//   });
//   it(`should return 350 when 7 correct slow answers, 0 lives`, () => {
//     let answers = [{isCorrect: true, time: 25},
//       {isCorrect: true, time: 25},
//       {isCorrect: true, time: 25},
//       {isCorrect: false, time: 25},
//       {isCorrect: true, time: 25},
//       {isCorrect: true, time: 25},
//       {isCorrect: false, time: 25},
//       {isCorrect: false, time: 25},
//       {isCorrect: true, time: 25},
//       {isCorrect: true, time: 25}];
//     assert.equal(350, countPoints(answers, 0));
//   });
//   it(`should return 1650 when 10 correct answers with fast time, 3 lives`, () => {
//     let answers = [{isCorrect: true, time: 5},
//       {isCorrect: true, time: 5},
//       {isCorrect: true, time: 5},
//       {isCorrect: true, time: 5},
//       {isCorrect: true, time: 5},
//       {isCorrect: true, time: 5},
//       {isCorrect: true, time: 5},
//       {isCorrect: true, time: 5},
//       {isCorrect: true, time: 5},
//       {isCorrect: true, time: 5}];
//     assert.equal(1650, countPoints(answers, 3));
//   });
//   it(`should return 650 when 10 correct answers with slow time, 3 lives`, () => {
//     let answers = [{isCorrect: true, time: 25},
//       {isCorrect: true, time: 25},
//       {isCorrect: true, time: 25},
//       {isCorrect: true, time: 25},
//       {isCorrect: true, time: 25},
//       {isCorrect: true, time: 25},
//       {isCorrect: true, time: 25},
//       {isCorrect: true, time: 25},
//       {isCorrect: true, time: 25},
//       {isCorrect: true, time: 25}];
//     assert.equal(650, countPoints(answers, 3));
//   });
//   it(`should return 800 when 8 correct answers, 2 with fast time, 3 with middle time, 3 with slow time, 1 lives`, () => {
//     let answers = [{isCorrect: true, time: 15},
//       {isCorrect: true, time: 5},
//       {isCorrect: true, time: 15},
//       {isCorrect: true, time: 25},
//       {isCorrect: false, time: 15},
//       {isCorrect: true, time: 5},
//       {isCorrect: true, time: 15},
//       {isCorrect: true, time: 25},
//       {isCorrect: false, time: 15},
//       {isCorrect: true, time: 25}];
//     assert.equal(800, countPoints(answers, 1));
//   });
// });
//
// describe(`Updating player's lives`, () => {
//   it(`should return exception, invalid data`, () => {
//     assert.throw(() => updateLives(`answer`, 1), `Invalid input values`);
//   });
//   it(`valid data, correct answers`, () => {
//     assert.equal(3, updateLives({isCorrect: true, time: 5}, 3));
//     assert.equal(2, updateLives({isCorrect: true, time: 15}, 2));
//     assert.equal(1, updateLives({isCorrect: true, time: 25}, 1));
//   });
//   it(`valid data, incorrect answers`, () => {
//     assert.equal(2, updateLives({isCorrect: false, time: 5}, 3));
//     assert.equal(1, updateLives({isCorrect: false, time: 15}, 2));
//     assert.equal(0, updateLives({isCorrect: false, time: 25}, 1));
//     assert.equal(-1, updateLives({isCorrect: false, time: 25}, 0));
//   });
// });
//
// describe(`Screens switching`, () => {
//   it(`Invalid data`, () => {
//     assert.throw(() => switchScreen(`answer`, 1), `Invalid input values`);
//   });
//   it(`valid data, correct data`, () => {
//     assert.equal(1, switchScreen([0, 1, 2, 3, 4, 5, 6], 0));
//     assert.equal(2, switchScreen([0, 1, 2, 3, 4, 5, 6], 1));
//     assert.equal(6, switchScreen([0, 1, 2, 3, 4, 5, 6], 5));
//   });
//   it(`valid data, correct data, last screen`, () => {
//     assert.equal(-1, switchScreen([0, 1, 2, 3, 4, 5, 6], 6));
//   });
// });
//
// describe(`Timer`, () => {
//   it(`Invalid data type`, () => {
//     assert.throw(() => new Timer(`answer`), `Invalid type, input value should be number`);
//   });
//   it(`Invalid data value`, () => {
//     assert.throw(() => new Timer(-1), `Invalid input value, should be a positive`);
//   });
//   it(`Default timer`, () => {
//     const timer = new Timer();
//     assert.deepEqual({time: 29, isBlinked: false}, timer.tick());
//   });
//   it(`10 seconds timer`, () => {
//     const timer = new Timer(10);
//     assert.deepEqual({time: 9, isBlinked: false}, timer.tick());
//     assert.deepEqual({time: 8, isBlinked: false}, timer.tick());
//     assert.deepEqual({time: 7, isBlinked: false}, timer.tick());
//     assert.deepEqual({time: 6, isBlinked: false}, timer.tick());
//     assert.deepEqual({time: 5, isBlinked: true}, timer.tick());
//     assert.deepEqual({time: 4, isBlinked: true}, timer.tick());
//     assert.deepEqual({time: 3, isBlinked: true}, timer.tick());
//     assert.deepEqual({time: 2, isBlinked: true}, timer.tick());
//     assert.deepEqual({time: 1, isBlinked: true}, timer.tick());
//     assert.deepEqual({time: 0, isBlinked: true}, timer.tick());
//     assert.deepEqual({time: 0, isBlinked: true}, timer.tick());
//   });
// });
