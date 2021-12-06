const solution = (arr) => {
  let answer = [...'0'.repeat(10)];
  const result = [...String(arr.reduce((a,c) => a*c))];
  for (let i = 0 ; i < result.length; i++) {
    answer.splice(Number(result[i]), 1, Number(answer[Number(result[i])])+1)
  }
  return answer.join('\n');
}
let input = (require('fs').readFileSync('ex.txt')+'').trim().split(`\r\n`);
// let input = (require('fs').readFileSync('/dev/stdin')+'').trim().split(`\n`);

console.log(solution(input));



const solution = (arr) => {
  let answer = {};
  for(let i =0; i <=9; i++) {
    answer[i] = 0;
  }

  const result = [...String(arr.reduce((a,c) => a*c))];

  for(let i =0; i <result.length; i++) {
    answer[result[i]] = answer[result[i]] +1;
  }

  return Object.values(answer).join('\n').slice();
}
let input = (require('fs').readFileSync('ex.txt')+'').trim().split(`\r\n`);
// let input = (require('fs').readFileSync('/dev/stdin')+'').trim().split(`\n`);

console.log(solution(input));
