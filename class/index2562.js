const solution = (numArray) => {
  const max = Math.max(...numArray);
  const maxIndex = numArray.findIndex((num) => +num === max) + 1;
  return [max , maxIndex].join('\n');
}

let fs = require('fs');
let input = (require('fs').readFileSync('ex.txt')+'').trim().split(`\r\n`);

console.log(solution(input));