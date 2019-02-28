const LinkedList = require('./linkedList');
const SSL = new LinkedList();

function main() {
  SSL.insertFirst('Apollo');
  SSL.insertLast('Boomer');
  SSL.insertLast('Helo');
  SSL.insertLast('Husker');
  SSL.insertLast('Starbuck');
  SSL.insertLast('Tauhida');
  console.log(JSON.stringify(SSL));
  SSL.remove('Tauhida');
  console.log(JSON.stringify(SSL));
  SSL.remove('squirrel');
  return SSL;
}
main();
