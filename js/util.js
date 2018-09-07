const getDomElementFromString = (string, tag = `div`) => {
  const div = document.createElement(tag);
  div.insertAdjacentHTML(`afterbegin`, string);

  if (div.childNodes.length === 1) {
    return div.firstChild;
  }
  const fragment = document.createDocumentFragment();
  Array.from(div.childNodes).forEach((x) => fragment.appendChild(x));
  return fragment;
};

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

export {getDomElementFromString, show, crossfadeShow};
