


function urlify(string){

  for(let i = 0; i < string.length; i++){
    if(string.charAt(i) === ' '){
      string = string.slice(0, i) + '%20' + string.slice(i + 1)
    }
  
  }
  return string;
}

console.log(urlify('hello world hello'))