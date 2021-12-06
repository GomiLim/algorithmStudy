const solution = (arr) => {
  const num1 = +arr[0];
  const num2 = +arr[1];

 return [num1+num2 ,num1-num2, num1*num2, Math.floor(num1/num2), num1%num2].join('\n');

}

let fs = require('fs');
let input = (require('fs').readFileSync('ex.txt')+'').trim().split(` `);

console.log(input);
console.log(solution(input));
