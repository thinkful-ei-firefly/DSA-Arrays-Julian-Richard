'use strict';

function merge(arr1, arr2) {

    let result = [];

    let i = 0;
    let j = 0;

    while(j <= arr2.length || i <= arr1.length) {

        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i += 1;
            console.log(`i = ${i}, ${result}`);
        }
        else if (arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j += 1;
            console.log(`j = ${j}, ${result}`);
        }
        else if (arr1[i] === arr2[j]) {
            result.push(arr1[i]);
            result.push(arr2[j]);
            i += 1;
            j += 1;
        }
    }

    return result;
    
}

function merge2(arr1, arr2) {
    let result = [...arr1, ...arr2];
    return result.sort((a, b) => a - b); //could write our own sort method
}

const a = [1, 3, 6, 8, 11];

const b = [2, 3, 5, 8, 9, 10];

console.log(merge2(a,b));