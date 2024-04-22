//think of a singly linked list like a one-way street where you can only go in one direction, while a doubly linked list is like a two-way street where you can go in both directions. 


// ----- > e.g : SinglyLinkedList
function createNode(data) {
    return {
      data: data,
      next: null
    };
  }
 
  
  function appendNode(head, data) {
    const newNode = createNode(data);
    if (!head) {
      return newNode;
    }
    let current = head; // null
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    return head;
  }
  
  // Example usage
  let sll = null;
  sll = appendNode(sll, 1);
  sll = appendNode(sll, 2);
  sll = appendNode(sll, 3);
  console.log(sll); 
  
  // ----> e.g : DoublyLinkedList
  function createNode(data) {
    return {
      data: data,
      next: null,
      prev: null
    };
  }
  
  function appendNode(head, tail, data) {
    const newNode = createNode(data);
    if (!head) {
      return { head: newNode, tail: newNode };
    }
    tail.next = newNode;
    newNode.prev = tail;
    return { head: head, tail: newNode };
  }
 
  
  // Example usage
  let dll = null;
  dll = appendNode(dll, null, 1);
  dll = appendNode(dll.head, dll.tail, 2);
  dll = appendNode(dll.head, dll.tail, 3);
  console.log(dll); 
  
  