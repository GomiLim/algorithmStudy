const solution = (arr) => {
  const numberArray = arr.map(e => +e);
  const maxScore = Math.max(...numberArray);
  return numberArray.map((score)=> (score/maxScore*100)).reduce((a,c) => a+c, 0)/arr.length;
}

let input = (require('fs').readFileSync('/dev/stdin')+'').trim().split(`\n`)[1].split(' ');

console.log(solution(input));


// ===================================


const solution = (arr) => {
  const maxScore = Math.max(...arr);
  return arr.map((score)=> (Number(score)/maxScore*100)).reduce((a,c) => a+c, 0)/arr.length;
}

// let input = (require('fs').readFileSync('ex.txt')+'').trim().split(`\n`)[1].split(' ');
let input = (require('fs').readFileSync('/dev/stdin')+'').trim().split(`\n`)[1].split(' ');

console.log(solution(input));