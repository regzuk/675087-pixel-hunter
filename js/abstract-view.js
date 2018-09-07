class AbstractView {
  constructor() {
    this._element = undefined;
  }

  get template() {
    throw new Error(`Template is required`);
  }

  bind() {}

  render() {
    const div = document.createElement(`div`);
    div.insertAdjacentHTML(`afterbegin`, this.template);

    this._element = div.firstChild;
  }

  get element() {
    if (!this._element) {
      this.render();
      this.bind();
    }
    return this._element;
  }
}

export {AbstractView};
