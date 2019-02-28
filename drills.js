const { LinkedList, displaySLL, size, isEmpty, findPrevious, findLast, findFirst } = require('./linkedList');

const SLL = new LinkedList();

function main() {
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  // console.log(JSON.stringify(SLL));
  // SLL.remove('Tauhida');
  // console.log(JSON.stringify(SLL));
  // SLL.remove('squirrel');
  // SLL.insertAfter('squirrel', null);
  // SLL.insertAt('squirrel', 5);
  // displaySLL(SLL);
  // size(SLL);
  // isEmpty(SLL);
  // findPrevious(SLL, 'Helo');
  // findLast(SLL);
  // console.log(findFirst(SLL));
  console.log(reverseList(SLL));
  return SLL;
}
main();

function reverseList(sll) {
  if (sll.head === null) {
    console.log('you aint got no list');
  } else {
    let prevNode = sll.head;
    let currNode = sll.head.next;
    let saved = null;
    while (currNode !== null) {
      sll.head.next = null;
      saved = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = saved;
    }
    sll.head = prevNode;
    return sll;
  }
}


