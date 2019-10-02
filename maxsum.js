

function maxSum(input){
  let currentMax = 0;
  let currentSum = 0;

  for( let i=0; i<input.length; i++ ){
    currentSum += input[i];
    if (currentSum > currentMax){
      currentMax = currentSum;
    }
  }
  return currentMax;
}

console.log(maxSum([4, 6, -3, 5, -2, 1]))

/*
cmax=0 csum=0
i=0 , csum=4 cmax=4
i=1 , csum=10 cmax=10
i=2 , csum=7 cmax=10
i=3 , csum=12 cmax=12


*/