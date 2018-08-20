const getDomElementFromString = (string) => {
  const div = document.createElement(`div`);
  div.insertAdjacentHTML(`afterbegin`, string);
  return div.firstChild;
};

export {getDomElementFromString};
