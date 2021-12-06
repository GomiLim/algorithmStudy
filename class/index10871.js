const solution = (arr) => {
  let minNum = arr[0].split(' ')[1]; 
  let numList = arr[1].split(' '); 

 return numList.filter(num => +num < +minNum).join(' ')

}

let fs = require('fs');
let input = (require('fs').readFileSync('ex.txt')+'').trim().split(`\r\n`);

console.log(input);
console.log(solution(input));
