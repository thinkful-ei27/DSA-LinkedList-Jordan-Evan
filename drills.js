const { LinkedList, displaySLL, size, isEmpty, findPrevious, findLast } = require('./linkedList');

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
  SLL.insertAfter('squirrel', null);
  SLL.insertAt('squirrel', 5);
  displaySLL(SLL);
  size(SLL);
  isEmpty(SLL);
  findPrevious(SLL, 'Helo');
  findLast(SLL);
  return SLL;
}
main();
