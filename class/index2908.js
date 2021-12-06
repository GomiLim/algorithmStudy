const solution = (arr) => {
  const newArr = arr.map((num) => [...String(num)].reverse().join(''));
  return Math.max(...newArr);
}



let fs = require('fs');
let input = (require('fs').readFileSync('ex.txt')+'').trim().split(` `);

console.log(solution(input));