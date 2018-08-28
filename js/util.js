const getDomElementFromString = (string) => {
  const div = document.createElement(`div`);
  div.insertAdjacentHTML(`afterbegin`, string);

  if (div.childNodes.length === 1) {
    return div.firstChild;
  }
  const fragment = document.createDocumentFragment();
  Array.from(div.childNodes).forEach((x) => fragment.appendChild(x));
  return fragment;
};

export {getDomElementFromString};
