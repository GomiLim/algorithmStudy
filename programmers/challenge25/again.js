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
/*
풀이과정
function solution(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (j !== i) {
        let sum = numbers[i] + numbers[j];
        console.log('인자1 :', numbers[i])
        console.log('인자2 :', numbers[j])
        console.log('합한 값 :', sum)
        if (result.indexOf(sum) === -1) {
          result.push(sum);
          console.log('결과 값:', result)

        }
      }
    }
    console.log('=====================')
  }
  console.log('정답:', result.sort((a, b) => a - b))
  return result.sort((a, b) => a - b)
}
*/

function solution(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (j !== i) {
        let sum = numbers[i] + numbers[j];
        if (result.indexOf(sum) === -1) {
          result.push(sum);
        }
      }
    }
  }
  return result.sort((a, b) => a - b)
}


//SET 이용해보기
const setSoultion = (numbers) => {
  const list = new Set;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      (i !== j) && list.add(numbers[i] + numbers[j]);
    }
  }
  console.log([...list].sort((a, b) => a - b))
}

console.log(setSoultion([5, 0, 2, 7]));