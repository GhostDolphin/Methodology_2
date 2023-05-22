'use strict';

const Node = class {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
};

const List = class {
  constructor() {
    this.head = null;
    this.tail = null;
    this.inLength = 0;
  }

  length() {
    return this.inLength;
  }

  append(element) {
    const newNode = new Node(element);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.inLength++;
  }
};

// const test = new List();

// test.append('a');
// console.log(test);