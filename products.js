
function products(array){
  let result = [];
  let value = 1;
  for(let i=0; i<array.length; i++){
    for(let j=0; j<array.length; j++){
      if(i != j){
        value *= array[j];
      }
    }
    result.push(value)
    value = 1;
  }
  return result;
}

let input = [1, 3, 9, 4]
console.log(products(input))
/*
i=0 j=0 result = value 3*9*4 

*/