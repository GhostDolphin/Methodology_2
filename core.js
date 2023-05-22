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

const list = new List();

// Test append
list.append("H");
list.append("W");
console.log(list.elements);

// Test insert
list.insert("I", 1);
console.log(list.elements);

// Test delete
let deletedElement = list.delete(1);
console.log(list.elements);
console.log(deletedElement);

// Test deleteAll
list.append("H");
list.deleteAll("H");
console.log(list.elements);

// Test get
list.append("G");
console.log(list.get(1));

// Test clone
let cloneList = list.clone();
console.log(cloneList.elements);

// Test reverse
list.reverse();
console.log(list.elements);

// Test findFirst
console.log(list.findFirst("World"));

// Test findLast
console.log(list.findLast("World"));

// Test clear
list.clear();
console.log(list.elements);

// Test extend
let newList = new List();
newList.append("New");
newList.append("List");
list.extend(newList);
console.log(list.elements);
