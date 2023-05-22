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

  insert(element, index) {
    if (index < 0 || index > this.inLength) {
      throw new Error("Invalid index");
    }

    const newNode = new Node(element);

    if (index === 0) {
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    } else if (index === this.inLength) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.head;
      let currentIndex = 0;

      while (currentIndex < index - 1) {
        currentNode = currentNode.next;
        currentIndex++;
      }

      newNode.next = currentNode.next;
      newNode.prev = currentNode;
      currentNode.next.prev = newNode;
      currentNode.next = newNode;
    }

    this.inLength++;
  }
};

// const test = new List();

// test.append('a');
// console.log(test);