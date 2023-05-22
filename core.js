'use strict';

const List = class {
  constructor() {
    this.elements = [];
  }

  length() {
    return this.elements.length;
  }

  append(element) {
    this.elements.push(element);
  }

  insert(element, index) {
    if (index < 0 || index > this.length()) {
      throw new Error("Invalid index");
    }
    this.elements.splice(index, 0, element);
  }

  delete(index) {
    if (index < 0 || index >= this.length()) {
      throw new Error("Invalid index");
    }
    return this.elements.splice(index, 1)[0];
  }
};