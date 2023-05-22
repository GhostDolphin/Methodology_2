class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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

  delete(index) {
    if (index < 0 || index >= this.inLength) {
      throw new Error("Invalid index");
    }

    let deletedNode;

    if (this.inLength === 1) {
      deletedNode = this.head;
      this.head = null;
      this.tail = null;
    } else if (index === 0) {
      deletedNode = this.head;
      this.head = this.head.next;
      this.head.prev = null;
    } else if (index === this.inLength - 1) {
      deletedNode = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let currentNode = this.head;
      let currentIndex = 0;

      while (currentIndex < index) {
        currentNode = currentNode.next;
        currentIndex++;
      }

      deletedNode = currentNode;
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
    }

    this.inLength--;

    return deletedNode.data;
  }

  deleteAll(element) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.data === element) {
        if (currentNode === this.head) {
          this.head = currentNode.next;
          if (this.head !== null) {
            this.head.prev = null;
          }
        } else if (currentNode === this.tail) {
          this.tail = currentNode.prev;
          if (this.tail !== null) {
            this.tail.next = null;
          }
        } else {
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
        }

        this.inLength--;
      }

      currentNode = currentNode.next;
    }
  }

  get(index) {
    if (index < 0 || index >= this.inLength) {
      throw new Error("Invalid index");
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode.data;
  }

  clone() {
    const newList = new DoublyLinkedList();
    let currentNode = this.head;

    while (currentNode !== null) {
      newList.append(currentNode.data);
      currentNode = currentNode.next;
    }

    return newList;
  }

  reverse() {
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode !== null) {
      const nextNode = currentNode.next;
      currentNode.next = prevNode;
      currentNode.prev = nextNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;
  }

  findFirst(element) {
    let currentNode = this.head;
    let index = 0;

    while (currentNode !== null) {
      if (currentNode.data === element) {
        return index;
      }

      currentNode = currentNode.next;
      index++;
    }

    return -1;
  }

  findLast(element) {
    let currentNode = this.tail;
    let index = this.inLength - 1;

    while (currentNode !== null) {
      if (currentNode.data === element) {
        return index;
      }

      currentNode = currentNode.prev;
      index--;
    }

    return -1;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.inLength = 0;
  }

  extend(elements) {
    const newList = elements.clone();
    let currentNode = newList.head;

    while (currentNode !== null) {
      this.append(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

const list = new DoublyLinkedList();

list.append('A');
list.append('B');
list.append('C');

console.log(list.length()); // 3

list.insert('D', 1);

console.log(list.get(1)); // 'D'

list.delete(2);

console.log(list.length()); // 3
console.log(list.findFirst('A')); // 0
console.log(list.findLast('B')); // 1

const newList = list.clone();

list.reverse();

list.extend(newList);

list.clear();

console.log(list.length()); // 0
