'use strict';

function removeChars(input, remove) {
    let result = '';
    for(let i=0; i<input.length; i++) {
        if(!remove.includes(input[i])) {
            result += input[i];
        }
    }
    return result;
}




let input = 'Battle of the Vowels: Hawaii vs. Grozny';

let remove = 'aeiou';

console.log(removeChars(input, remove));

