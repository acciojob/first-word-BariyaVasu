function firstWord(str) {

  str = str.trimStart();

  const spaceIndex = str.indexOf(' ');


  if (spaceIndex === -1) {
    return str;
  }

  
  return str.substring(0, spaceIndex);
}


console.log(firstWord('see and stop'));    
console.log(firstWord(' Hello World!'));    
console.log(firstWord('12345'));            
console.log(firstWord(''));                 