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

export {getDomElementFromString};
