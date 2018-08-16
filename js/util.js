const getDomElementFromString = (string) => {
  const div = document.createElement(`div`);
  div.insertAdjacentHTML(`afterbegin`, string);
  // const fragment = document.createDocumentFragment();
  // div.childNodes.forEach((x) => fragment.appendChild(x));
  // return fragment;
  return div.firstChild;
};

export {getDomElementFromString};
