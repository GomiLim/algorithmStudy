const solution = (year) => {
  if (year%4) return 0;

  if ( (year%100) || !(year%400) ) return 1;
  else return 0;
}

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

console.log(solution(input));