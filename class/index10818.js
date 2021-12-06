const solution = (arr) => {
  let maxNum = arr[0];
  let minNum = arr[0];

  for(let num of arr) {
    if (+num < minNum) minNum = +num;
    else if (+num > maxNum) maxNum = +num;
    else continue;
  }

return minNum +' '+ maxNum
}

let fs = require('fs');
let input = (require('fs').readFileSync('ex.txt')+'').trim().split(`\n`)[1].split(' ');

console.log(solution(input));
