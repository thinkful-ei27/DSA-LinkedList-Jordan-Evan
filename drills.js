const { LinkedList, displaySLL, size } = require('./linkedList');

const SSL = new LinkedList();

function main() {
  SSL.insertFirst('Apollo');
  SSL.insertLast('Boomer');
  SSL.insertLast('Helo');
  SSL.insertLast('Husker');
  SSL.insertLast('Starbuck');
  SSL.insertLast('Tauhida');
  // console.log(JSON.stringify(SSL));
  // SSL.remove('Tauhida');
  // console.log(JSON.stringify(SSL));
  // SSL.remove('squirrel');
  // SSL.insertAfter('squirrel', null);
  SSL.insertAt('squirrel', 5);
  displaySLL(SSL);
  size(SSL);
  return SSL;
}
main();
