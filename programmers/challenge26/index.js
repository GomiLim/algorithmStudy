/*
콜라츠 추측
문제 설명
1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.

1-1. 입력된 수가 짝수라면 2로 나눕니다. 
1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 됩니다. 위 작업을 몇 번이나 반복해야하는지 반환하는 함수, solution을 완성해 주세요. 단, 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.

제한 사항
입력된 수, num은 1 이상 8000000 미만인 정수입니다.
입출력 예
n	result
6	8
16	4
626331	-1
*/

function recursive_solution(num, count=0) {
  if (count >= 500) return -1;
  if (num === 1) return count;

  let result = num;
  if (num % 2 === 0) {
    result = recursive_solution(result / 2, count + 1);
  } else {
    result = recursive_solution(result * 3 + 1, count + 1);
  }
  return result;
}

console.log(recursive_solution(6));

function jh_solution(num) {
  let result = num;   // 시작 숫자는 받아온 숫자에서 시작한다.
  let count = 0;

  // 1이 아닌 경우 계속해서 Collatz라는 이상한 사람이 만든 작업을 반복
  while (result !== 1) {
    if (count >= 500) {   // 500번 반복했을 경우 -1 반환
      return -1;
    }

    // 짝수인 경우 2로 나눈다.
    if (result % 2 === 0) {
      result = result / 2;
    } else {
      // 홀수인 경우 3을 곱하고 1을 더한다.
      result = result * 3 + 1;
    }

    // 작업 횟수 계산
    count++;
  }

  // 작업 횟수를 반환한다.
  return count;
}

console.log(jh_solution(6));

function solution(num) {
  if ( num % 2 === 0) {
    if (num<0) return;
    if (num===0) return 1;
    return solution(num % 2);

  } else {

    while ( a> 1) {
      a = (num * 3) + 1 ;
      count++;
    }
  }
  console.log(count);
}

console.log(solution(6));