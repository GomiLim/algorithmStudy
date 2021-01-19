/*
시저 암호
문제 설명
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
예를 들어 AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 됩니다. z는 1만큼 밀면 a가 됩니다. 
문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

제한 조건
공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다.
입출력 예
s	n	result
AB	1	BC
z	1	a
a B z	4	e F d
*/

function jh_solution2(s, n) {
  console.log("==================================");
  console.log(`solution: ${s} shift ${n} times`);

  let result = s;

  for (let i = 0; i < n; i++) {
    result = result.split('').map(item => {
      if (item == ' ') {
        return ' ';
      } else {
        let current_string = item.charCodeAt([0]);
        let next_string = current_string + 1;

        if (current_string >= 65 && current_string <= 90) {
          // Upper Case
          next_string = (next_string - 65) % 26 + 65;
        } else if (current_string >= 97 && current_string <= 122) {
          // Lower Case
          next_string = (next_string - 97) % 26 + 97;
        }

        console.log(`current char code: ${current_string}, next char code: ${next_string}`);
        console.log(`current char: ${String.fromCharCode(current_string)}, next char: ${String.fromCharCode(next_string)}`);

        return String.fromCharCode(next_string);
      }
    }).join('');
  }

  return result;
}

function jh_solution(s, n) {
  console.log("==================================");
  console.log(`solution: ${s} shift ${n} times`);

  return s.split('').map(item => {
    if (item == ' ') {
      return ' ';
    } else {
      let current_string = item.charCodeAt([0]);
      let next_string = current_string + n;

      if (current_string >= 65 && current_string <= 90) {
        // Upper Case
        next_string = (next_string - 65) % 26 + 65;
      } else if (current_string >= 97 && current_string <= 122) {
        // Lower Case
        next_string = (next_string - 97) % 26 + 97;
      }

      console.log(`current char code: ${current_string}, next char code: ${next_string}`);
      console.log(`current char: ${String.fromCharCode(current_string)}, next char: ${String.fromCharCode(next_string)}`);

      return String.fromCharCode(next_string);
    }
  }).join('');
}

function solution(s, n) {
  var answer = s.split('');
  let letter = '';
  
  answer.map(item => {
    if (item == ' ') {
      return ' ';
    } else {
      // let current_string = String.fromCharCode([item.charCodeAt([0])]);
      let current_string = item.charCodeAt([0]);

      if (String.fromCharCode([current_string]) === 'z') {
        // return letter += String.fromCharCode((current_string+1 - 97) % 26);
        return letter +=String.fromCharCode(((current_string+1 - 97) % 26) +97+n-1);
      } else if (String.fromCharCode([current_string]) ===  'Z') {
        return letter +=String.fromCharCode(((current_string+1 - 65) % 26) +65 +n-1);
      }else {
        return letter +=  String.fromCharCode([item.charCodeAt([0])+n]);
      }
    }
  })
  return letter;
}

console.log(jh_solution2('AB', 1));
console.log(jh_solution2('z', 1));
console.log(jh_solution2('a B z', 4));
console.log(jh_solution2('a Z z', 4));