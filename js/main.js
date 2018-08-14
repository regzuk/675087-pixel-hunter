const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;

const mainElement = document.querySelector(`#main`);
const SCREEN_ID = [`intro`, `greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`, `modal-error`, `modal-confirm`];

const screens = SCREEN_ID.map((x) => document.querySelector(`#${x}`).content);

const selectScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element.cloneNode(true));
};

let currentScreen = 1;
const select = (index) => {
  index = index < 0 ? screens.length - 3 : index;
  index = index >= screens.length - 2 ? 0 : index;
  currentScreen = index;
  selectScreen(screens[currentScreen]);
};

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      select(currentScreen + 1);
      break;
    case LEFT_ARROW:
      select(currentScreen - 1);
      break;
  }
});

selectScreen(screens[currentScreen]);

document.querySelector(`body`).insertAdjacentHTML(`beforeend`,
    `<div class="arrows__wrap">
  <style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>
</div>`);

Array.from(document.querySelectorAll(`.arrows__btn`)).map((arrow, i) => {
  arrow.addEventListener(`click`, () => select(currentScreen - 1 + 2 * i));
});
