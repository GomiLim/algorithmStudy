
const solution = (arr) => {
  let answer = [];
  for(let i = 0; i < arr.length; i++) {
    const splitArray = arr[i].split(' ');
    const str = [...splitArray[1]];
    const repeatString = str.map(s => s.repeat(Number(splitArray[0])));
    answer.push(repeatString.join(''));
  }
 return answer.join('\n')
}

let input = (require('fs').readFileSync('ex.txt')+'').trim().split(`\r\n`).slice(1);
// let input = (require('fs').readFileSync('/dev/stdin')+'').trim().split(`\n`).slice(1);

console.log(solution(input));