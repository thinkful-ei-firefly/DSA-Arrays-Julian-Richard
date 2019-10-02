

function stringRotation(str1, str2){
  let combined = str2 + str2;
  return combined.includes(str1)
  
}


let str1 = 'amazon';
let str2 = 'azonam';

console.log(stringRotation(str1, str2))