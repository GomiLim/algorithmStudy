/*
소수 찾기
문제 설명
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

제한 조건
n은 2이상 1000000이하의 자연수입니다.
입출력 예
n	result
10	4
5	3
입출력 예 설명
입출력 예 #1
1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

입출력 예 #2
1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환
*/

let dict = {};
console.log(dict["test"]); //undefined
console.log(dict.gomi); //undefined
console.log(dict); //{}

dict.test = "test";
console.log(dict.test); //test
console.log(dict["test"]); //test


function solution(n) {
  let list = {};
  let result =[];

  for(let j = 1; j <= n; j++) {
    for(let i =1; i <= j; i++) {
      if(j % i === 0) {
        // if (!list[j]) console.log(`list[j] is undefined : ${j} : ${list[j]}`)
        if (!list[j]) list[j] = [1];
        else list[j].push(i)
      }
    }
    if ( list[j].length  === 2) {
      result.push(j);
    }
  }
  return result.length;
}

function jh_solution(n) {
  let list = {};
  let result =[];

  for(let j = 1; j <= n; j++) {
    for(let i =1; i <= j; i++) {
      if(j % i === 0) {
        // if (!list[j]) console.log(`list[j] is undefined : ${j} : ${list[j]}`)
        if (!list[j]) list[j] = [1];
        else list[j].push(i)
      }
    }
  }

  return Object.keys(list).filter(item => {
    if (list[item].length > 2) return false;
    return true;
  }).length;
}

console.log(solution(10));
