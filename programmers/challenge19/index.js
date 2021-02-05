/*

1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

제한 조건
n은 2이상 1000000이하의 자연수입니다.

*/

function solution(n) {
  let list = {};

  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= j; i++) {
      if (j % i === 0) {


        // if (!list[j]) list[j] = [1];
        // else list[j].push(i)
      }
    }
  }
  // console.log(list)
  return Object.keys(list).filter(item => {
    if (list[item].length === 2) return true;
    else return false;
  }).length;
}

console.log(solution(15))

//4

function aa(pp) {
  string = {};
  string[pp].push(1);
  console.log(stling);
}

aa('aa');