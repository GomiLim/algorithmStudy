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

  let list = Math.floor(answer.length / 5) * 2;
  const make_repeatAnswer = (student) => {
    return student.join().replace(/,/gi, "").repeat(list).split('');
  };

  const checkAnswer = (student, count = 0) => {
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === Number(student[i])) {
        count++;
      } else {
        continue;
      }
    }
    return count;
  }


  let new_answerArray = [
    answer.length > 5 ? checkAnswer(make_repeatAnswer(student_1)) : checkAnswer(student_1),
    answer.length > 5 ? checkAnswer(make_repeatAnswer(student_2)) : checkAnswer(student_2),
    answer.length > 5 ? checkAnswer(make_repeatAnswer(student_3)) : checkAnswer(student_3),
  ]

  let max = Math.max.apply(null, new_answerArray);
  return new_answerArray.map((ele, idx) => {
    if (ele === max) return idx + 1;
  }).filter(ele => ele);


  //map 과 filter의 차이 구분하기

  /*
  console.log(new_answerArray);
  console.log(new_answerArray.map((ele, idx) => {
    return idx
  }));
  
  let arr =[];
  let aa = new_answerArray.filter((ele, idx) => {
    console.log('정답:', ele);
    console.log('학생순번', idx + 1);
    console.log('최대값:', Math.max.apply(null, new_answerArray));
    console.log('===============')

    if (ele === Math.max.apply(null, new_answerArray)) {
      console.log('뿝:', idx + 1)
      arr.push(idx + 1);
      return true;
    };
    return false;
  });

  console.log(aa);

*/
  /*
  let new_answerArray = {
    '1번 수포자': answer.length > 5 ? checkAnswer(make_repeatAnswer(student_1)) : checkAnswer(student_1),
    '2번 수포자': answer.length > 5 ? checkAnswer(make_repeatAnswer(student_2)) : checkAnswer(student_2),
    '3번 수포자': answer.length > 5 ? checkAnswer(make_repeatAnswer(student_3)) : checkAnswer(student_3),
  }
    Math.max.apply(null, Object.values(new_answerArray));
  
    function getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
    }
    console.log(new_answerArray)
    return getKeyByValue(new_answerArray, Math.max.apply(null, Object.values(new_answerArray)));
  }
  */
}


console.log(solution([1, 2, 3, 4, 5]));
