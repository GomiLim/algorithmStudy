const solution = (arr) => {
  const numArr = arr.map(num => Number(num)%42);
  return [...new Set(numArr)].length;
}

let fs = require('fs');
let input = (require('fs').readFileSync('ex.txt')+'').trim().split(`\r\n`);

console.log(sol(input));