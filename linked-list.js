// create linked list
function LinkedList(){
  this.head = null;
}

// need to be able to add to the start of a linked list
// make the new node point to the current head and then make the head the new node

LinkedList.prototype.prepend = function(data) {
  var node = {
    data: data,
    next: this.head
  };

  this.head = node;
}



LinkedList.prototype.append = function(data) {
  var node = {
    data: data,
    next: this.head
  };

  if(this.empty()) {
    this.head = node;
    return;
  }

  var current = this.head;

  while(current.next !== null){
    current = current.next;
  }

  current.next = node;
}

// check to see if a linked list is empty, will be handy for many more functions
LinkedList.prototype.empty = function(){
  if(this.head === null){
    return true;
  } else {
    return false;
  }
}

// it will also be important to know the size of a linked list
LinkedList.prototype.size = function(){
  var current = this.head;
  var counter = 0;

  while(current !=== null) {
    counter += 1;
    current = current.next;
  }
}

