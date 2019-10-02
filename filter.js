'use strict';


//removes all numbers less than num in arr
function filter(arr, num) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] < num) {
            arr = [...arr.slice(0, i), ...arr.slice(i+1)]
            i -= 1;
        }
    }
    return arr;
}

let arr = [2, 1, 2, 2, 2, 5, 7, 3, 10, 12, 3, 2, 4, 6];

console.log(filter(arr, 5));

/*
[2, 1, 2, 2, 2, 5, 7, 3, 10, 12, 3, 2, 4, 6]

i = 0, value = 2
removes 2

arr = [1, 2, 2, 2, 5, 7, 3, 10, 12, 3, 2, 4, 6]
i = 1, value 2

setting i -= 1 ==> i = 0
 .
 .
 .
 .
[5, 7, 10, 12, 3, 2, 4, 6]
 i=4 
 removes value 3
 [5, 7, 10, 12, 2, 4, 6]

 i = 4 - 1 = 3 for loop [i = 3 ++ => i = 4]


*/