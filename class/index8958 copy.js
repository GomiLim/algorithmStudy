const solution = (arr) => {
  let scoreAnswer = [];
  arr.forEach((answer) => {
    let score = 0;
    answer.split('X').forEach((a) => {
      if(a) {
        const continueA = [...a];
        score += (continueA.length * (continueA.length + 1) / 2);
      }
    })

    scoreAnswer.push(score);
  })

  return scoreAnswer.join('\n');
}

let fs = require('fs');
let input = (require('fs').readFileSync('ex.txt')+'').trim().split(`\r\n`);
input.shift();

console.log(solution(input));
