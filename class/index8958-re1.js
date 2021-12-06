// const solution = (arr) => {
//   const answerArray = [];
//   for(let answer of arr) {
//     let score = 0;
//     answer.split('X').forEach((cehck) => {
//       if (!cehck) return;
//       else score += 1*(cehck.length* (cehck.length + 1) / 2)
//     })
//     answerArray.push(score);
//   }
//   return answerArray.join('\n');
// }
const solution = (arr) => {
  const answerArray = [];
  for(let i =0; i < arr.length; i++ ) {
    let score = 0;
    arr[i].split('X').forEach((cehck) => {
      if (!cehck) return;
      else score += 1*(cehck.length* (cehck.length + 1) / 2)
    })
    answerArray.push(score);
  }
  return answerArray.join('\n');
}

let fs = require('fs');
let input = (require('fs').readFileSync('ex.txt')+'').trim().split(`\r\n`);
input.shift();

console.log(solution(input));
