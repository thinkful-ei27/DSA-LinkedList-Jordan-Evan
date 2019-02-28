const _Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, key) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === key) {
      this.insertFirst(item);
      return;
    }
    let currNode = this.head;
    let prevNode = this.head;
    while (currNode.value !== key) {
      if (currNode.next === null) {
        return null;
      } else {
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
    prevNode.next = new _Node(item, currNode);
  }

  insertAfter(item, key) {
    if (!this.head) {
      return null;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while (currNode.value !== key) {
      if (currNode.next === null) {
        return null;
      } else {
        prevNode = currNode;
        currNode = currNode.next;
      }
    }

    currNode.next = new _Node(item, currNode.next);
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

module.exports = LinkedList;
