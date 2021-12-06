//10950, 10951
const solution = (arr) => {
  return arr.map((num) => {
   return +num.split(' ')[0] + +num.split(' ')[1]
  }).join('\n');
}

//10952
const solution = (arr) => {
  return arr.map((num) => {
    if(+num.split(' ')[0] && +num.split(' ')[1]) {
      return +num.split(' ')[0] + +num.split(' ')[1]
    } else {
      return;
    }
  }).join('\n');
}

let fs = require('fs');
let input = (require('fs').readFileSync('ex.txt')+'').trim().split(`\r\n`);
console.log(solution(input));
