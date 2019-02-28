const LinkedList = require('./linkedList');
const SSL = new LinkedList();

function main() {
  SSL.insertFirst('Apollo');
  SSL.insertLast('Boomer');
  SSL.insertLast('Helo');

  SSL.insertLast('Husker');
  SSL.insertLast('Starbuck');
  console.log(JSON.stringify(SSL));
  return SSL;
}
main();
