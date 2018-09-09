const mainElem = document.querySelector(`#main`);

const show = (view) => {
  if (mainElem.lastChild) {
    mainElem.removeChild(mainElem.lastChild);
  }
  mainElem.appendChild(view.element);
};

const crossfadeShow = (view) => {
  const oldScreen = mainElem.firstChild;
  oldScreen.style.position = `absolute`;
  oldScreen.style.zIndex = `10`;
  oldScreen.style.transition = `opacity 1s ease-in-out`;
  oldScreen.style.opacity = `0`;
  mainElem.appendChild(view.element);
  oldScreen.addEventListener(`transitionend`, () => {
    mainElem.removeChild(oldScreen);
  });
};

const showBefore = (view) => {
  if (mainElem.firstChild) {
    mainElem.insertBefore(view.element, mainElem.firstChild);
  } else {
    mainElem.appendChild(view.element);
  }
};

const removeFirst = () => {
  if (mainElem.firstChild) {
    mainElem.removeChild(mainElem.firstChild);
  }
};

export {show, crossfadeShow, showBefore, removeFirst};
