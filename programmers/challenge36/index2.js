/*
모의고사
dark
light
sublime
vim
emacs
 C++ 
문제 설명

수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.
1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
입출력 예
answers	return
[1,2,3,4,5]	[1]
[1,3,2,4,2]	[1,2,3]
입출력 예 설명
입출력 예 #1
수포자 1은 모든 문제를 맞혔습니다.
수포자 2는 모든 문제를 틀렸습니다.
수포자 3은 모든 문제를 틀렸습니다.
따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.
입출력 예 #2
모든 사람이 2문제씩을 맞췄습니다.
*/

function solution(answer) {
  let student_1 = [1, 2, 3, 4, 5];
  let student_2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let student_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let student_1_count = 0;
  let student_2_count = 0;
  let student_3_count = 0;

  let list = Math.floor(answer.length / 5) * 2;
  let student_1_repeatAnswer = student_1.join().replace(/,/gi, "").repeat(list).split('');
  let student_2_repeatAnswer = student_2.join().replace(/,/gi, "").repeat(list).split('');
  let student_3_repeatAnswer = student_3.join().replace(/,/gi, "").repeat(list).split('');

  if (answer.length > 5) {
    //student1
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === Number(student_1_repeatAnswer[i])) {
        student_1_count++;
      } else {
        continue;
      }
    }
    //student2
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === Number(student_2_repeatAnswer[i])) {
        student_2_count++;
      } else {
        continue;
      }
    }
    //student3
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === Number(student_3_repeatAnswer[i])) {
        student_3_count++;
      } else {
        continue;
      }
    }
  } else {
    //student1
    for (let i = 0; i < answer.length; i++) {
      // console.log(`${i}번쨰 답 :`, answer[i])
      // console.log(`1번 학생 :`, Number(student_1_repeatAnswer[i]))
      // console.log(`2번 학생 :`, student_2_repeatAnswer[i])
      // console.log(`3번 학생 :`, student_3_repeatAnswer[i])
      if (answer[i] === student_1[i]) {
        student_1_count++;
      } else {
        continue;
      }
    }

    //student2
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === student_2[i]) {
        student_2_count++;

      } else {
        continue;
      }
    }

    //student3
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === student_3[i]) {
        student_3_count++;

      } else {
        continue;
      }
    }
  }

  let new_answerArray = {
    '1번 수포자': student_1_count,
    '2번 수포자': student_2_count,
    '3번 수포자': student_3_count,
  }

  Math.max.apply(null, Object.values(new_answerArray));

  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  return getKeyByValue(new_answerArray, Math.max.apply(null, Object.values(new_answerArray)));
}

console.log(solution([1, 2, 3, 4, 5]));
