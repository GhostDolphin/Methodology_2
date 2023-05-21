'use strict';

const Node = class {
	constructor(char, pos, prev, next) {
		this.char = char;
		this.pos = pos;
		this.prev = prev;
		this.next = next;
	}
};

const List = class {
	constructor() {
		this.head = null;
		this.body = [];
		this.tail = null;
	}

	length() {
		if (!this.head) return 0;
		if (!this.tail) return 1;
		return this.tail.pos + 1;
	}

	append(char) {
		const len = this.length();
		if (len === 0) {
			this.head = new Node(char, 0, null, null);
			this.tail = this.head;
		}
		if (len === 1) {
			this.tail = new Node(char, 1, this.head.char, null);
			this.head.next = this.tail.char;
		}
		if (len > 1) {
			this.tail.next = char;
			this.body[this.body.length] = this.tail;
			this.tail = new Node(char, len, this.tail.char, null);
		}
	}
};