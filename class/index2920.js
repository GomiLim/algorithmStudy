const solution = (arr) => {
  const cehck = [...arr].some((num, index) => {
    if (arr[index+1]) {
      return Math.abs(num - arr[index+1]) !== 1
    } else return false;
  });

  if (!cehck) {
    console.log([...arr].sort((a,b) => a-b));
    console.log(arr);
    console.log([1, 2, 1, 2].equals([1, 2, 1, 2]));
   return [...arr].sort((a,b) => a-b).equals(arr) ?  'ascending' : 'descending';
  } else {
    return 'mixed'
  }
}

let fs = require('fs');
let input = (require('fs').readFileSync('ex.txt')+'').trim().split(` `);

console.log(solution(input));
