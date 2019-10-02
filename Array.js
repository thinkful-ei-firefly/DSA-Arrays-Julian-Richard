const Memory = require('./memory');
const memory = new Memory();

class Array {
  constructor() {
      this.length = 0;
      this._capacity = 0;
      this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
        this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
}
 
_resize(size) {
  const oldPtr = this.ptr;
  this.ptr = memory.allocate(size);
  if (this.ptr === null) {
      throw new Error('Out of memory');
  }
  memory.copy(this.ptr, oldPtr, this.length);
  memory.free(oldPtr);
  this._capacity = size;
}


}


function main(){
  Array.SIZE_RATIO = 3;
  // Create an instance of the Array class
  let arr = new Array();

  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  // push(3) Array {length: 1, _capacity: 3, ptr: 0}
  // push(5-10) Array {length: 6, _capacity: 12, ptr: 3}
  // Add an item to the array
  console.log(arr);
}


main()