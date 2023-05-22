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

  deleteAll(element) {
    this.elements = this.elements.filter(e => e !== element);
  }

  get(index) {
    if (index < 0 || index >= this.length()) {
      throw new Error("Invalid index");
    }
    return this.elements[index];
  }

  clone() {
    let newList = new List();
    newList.elements = [...this.elements];
    return newList;
  }

  reverse() {
    this.elements = this.elements.reverse();
  }

  findFirst(element) {
    return this.elements.indexOf(element);
  }

  findLast(element) {
    return this.elements.lastIndexOf(element);
  }

  clear() {
    this.elements = [];
  }

  extend(elements) {
    this.elements = [...this.elements, ...elements.elements];
  }
};