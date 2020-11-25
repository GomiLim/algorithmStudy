/*
대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
 s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 pPoooyY면 true를 return하고 Pyy라면 false를 return합니다.
*/

//다른사람의 풀이
function solution(s) {
  return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
  //충격적이다 정말
}
//초간단
function solutionMatch(s) {
  return s.match(/P/gi).length == s.match(/Y/gi).length ? true : false;
//근데 런타임 에러걸림
//true false 를 안햐ㅐ줘도 돠ㅣㄴ느군아아아아
//numPY("Izc") 이런 식으로 p나 y가 없는 경우에는 오류가 납니다....
//해결책 (s.match(/p/ig)||[]).length == (s.match(/y/ig)||[]).length
}

//2번째
function solutionSecond(s) {
  var P=[];
  var Y=[];

  Array.from(s.toUpperCase()).filter((ele)=> {
    (ele.indexOf('P') !== -1) && P.push(ele);
    (ele.indexOf('Y') !== -1) && Y.push(ele);
  })
  return P.length ===  Y.length ? true : false
}

//초기버전
function solutionFirst(s) {
  var P='';
  var Y='';

  Array.from(s.toUpperCase()).filter((ele)=> {
    if(ele.indexOf('P') !== -1){
      P += ele;
    }
    if(ele.indexOf('Y') !== -1){
      Y += ele;
    }
  })

  return P.length ===  Y.length ? true : false
}

console.log(solution('pPoooyY'))
//true

