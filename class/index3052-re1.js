const solution = (arr) => {
  return [...new Set(arr.map((num) => +num % 42))].length;

}

let fs = require('fs');
let input = (require('fs').readFileSync('ex.txt')+'').trim().split(`\r\n`);

console.log(input)
console.log(solution(input));
