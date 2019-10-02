'use strict';

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

    pop() {
        if (this.length === 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }

}


function main(){
    //what is this?
    Array.SIZE_RATIO = 3;
    // Create an instance of the Array class
    let arr = new Array();
    
    // Add an item to the array
    arr.push(3);
    // push(3) Array {length: 1, _capacity: 3, ptr: 0}

    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    // push(5-10) Array {length: 6, _capacity: 12, ptr: 3}
    // because we had a capacity of 3 the push(15) and push(19) used this capcity
    // the next push(45) because we ran out of capacity change the location of our array and 
    // added more capacity length = 6 now becasue we have 6 items

    arr.pop();
    arr.pop();
    arr.pop();
    // pop off three values { length: 3, _capacity: 12, ptr: 3 }
    // only changed the length of the array, capacity and location is ths same.

    console.log(arr);


    // Print the 1st item in arr
    console.log(arr.get(0));

    //empty arr (pop off three items)
    arr.pop();
    arr.pop();
    arr.pop();

    //add 1 item
    arr.push('tauhida'); 

    console.log(arr);
    console.log(arr.get(0));
    // result = NaN Does our memeory or Array class allow us to input a string?

    //Increase the size of the capacity
    //it is called when we reach the capacity limit 
    //resized to SIZE_RATIO * length of array
}


main();

