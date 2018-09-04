// import {getDomElementFromString} from './util.js';

// const statTemplate = getDomElementFromString(`<ul class="stats">
//   <li class="stats__result stats__result--wrong"></li>
//   <li class="stats__result stats__result--slow"></li>
//   <li class="stats__result stats__result--fast"></li>
//   <li class="stats__result stats__result--correct"></li>
//   <li class="stats__result stats__result--wrong"></li>
//   <li class="stats__result stats__result--unknown"></li>
//   <li class="stats__result stats__result--slow"></li>
//   <li class="stats__result stats__result--unknown"></li>
//   <li class="stats__result stats__result--fast"></li>
//   <li class="stats__result stats__result--unknown"></li>
// </ul>`);

const getStat = (answers = []) => {
  // const stat = statTemplate.cloneNode(true);
  const stat = document.createElement(`ul`);
  stat.classList.add(`stats`);
  answers.forEach((x) => {
    const li = document.createElement(`li`);
    li.classList.add(`stats__result`);
    if (x.isCorrect) {
      if (x.time < 10) {
        li.classList.add(`stats__result--fast`);
      } else if (x.time > 20) {
        li.classList.add(`stats__result--slow`);
      } else {
        li.classList.add(`stats__result--correct`);
      }
    } else {
      li.classList.add(`stats__result--wrong`);
    }
    stat.appendChild(li);
  });
  for (let i = 0; i < 10 - answers.length; i++) {
    const li = document.createElement(`li`);
    li.classList.add(`stats__result`);
    li.classList.add(`stats__result--unknown`);
    stat.appendChild(li);
  }
  return stat;
};

export default getStat;
