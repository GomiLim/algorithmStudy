/*
두 개 뽑아서 더하기
문제 설명
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers의 길이는 2 이상 100 이하입니다.
numbers의 모든 수는 0 이상 100 이하입니다.
입출력 예
numbers	result
[2,1,3,4,1]	[2,3,4,5,6,7]
[5,0,2,7]	[2,5,7,9,12]
*/
function solution(numbers) {
  let list = new Set;
  for(let i = 0; i < numbers.length; i ++) {
    for(let j = 0; j < numbers.length; j ++) {
      if (i !== j) {
        list.add(numbers[i]+numbers[j])
      }
    }
  }

  return [...list].sort((a,b) => a-b);
}

function solutionImdexOf(numbers) {
  var answer = [];
  //들어온 배열의 요소를 확인한다.
  //배열의 두개 요소를 뽑아 덧셈한 모든 경우의 수를 구한다.
  //중복된 값은 제거한다.
  //배열값을 리턴한다.
  for(let i=0; i<numbers.length-1; i++){
      for(let j=i+1; j<numbers.length; j++){
         if(answer.indexOf(numbers[i]+numbers[j])===-1){
             answer.push(numbers[i]+numbers[j]) 
         } 
      }
  }

  return answer.sort((a,b)=>a-b);
}

console.log(solution([2,1,3,4,1]));