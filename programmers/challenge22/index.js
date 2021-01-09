/*
약수의 합
문제 설명
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

제한 사항
n은 0 이상 3000이하인 정수입니다.
입출력 예
n	return
12	28
5	6
입출력 예 설명
입출력 예 #1
12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

입출력 예 #2
5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.
*/

function solution(n) {
  let list = [];
  if( n === 0 ) {
    return 0;
  }

  for (let i = 1; i < n+1; i ++) {
    n%i || list.push(i);
  }
  return list.reduce((a,c) => a+c);
}

function solutionNoArray(n) {
  let answer = n+1;

  for (let i = 2; i < n; i ++) {
    n%i ? 0 : answer += i;
  }
  return n === 0 ? 0 : n === 1 ? 1 : answer;
}


function solutionSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) sum += i
    }
    return sum
}


console.log(solutionNoArray(1));