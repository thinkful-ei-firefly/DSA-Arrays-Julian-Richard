'use strict';


function twoDArray(arr) {

    let rowsZero = []; //store row numbers that have a zero
    let columnZero = []; //store column numbers that have a zero
    //find all zeros first
    for(let row=0; row<arr.length; row++) {
        for(let column=0; column<arr[0].length; column++) {
            if(arr[row][column] === 0) {
                rowsZero.push(row);
                columnZero.push(column);
            }
        }
    }
    for(let row=0; row<arr.length; row++) {
        for(let column=0; column<arr[0].length; column++) {
            for(let testRow=0; testRow<rowsZero.length; testRow++) {
                if(row === rowsZero[testRow]) {
                    arr[row][column] = 0;
                }
            }

            for(let testColumn=0; testColumn<columnZero.length; testColumn++){
                if(column === columnZero[testColumn]) {
                    arr[row][column] = 0;
                }
            }
        }
    }
    return arr;
}


const input = [
    [1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]
];

console.log(twoDArray(input));