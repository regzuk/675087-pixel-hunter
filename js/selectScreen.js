const selectScreen = (idElem) => {
  const mainElem = document.querySelector(`#${idElem}`);
  return (elem) => {
    mainElem.innerHTML = ``;
    mainElem.appendChild(elem);
  };
};

const selectMainScreen = selectScreen(`main`);

export {selectMainScreen};
