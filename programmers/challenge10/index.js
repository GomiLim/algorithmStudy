/*
문제 설명
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요.

제한 조건
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
*/

// function solution(a, b) {
//     var answer = '';
//     var day = ['SUN','MON','TUE','WED','THU','FRI','SAT']
//     var date = new Date(`2016-${a}-${b}`);
//     return answer = day[date.getDay()];
// }

// function getDayName(a,b){
//     var date = new Date(2016, (a - 1), b);
//     console.log(date.toString())
//       return date.toString().slice(0, 3).toUpperCase();
//   }
console.log(getDayName(1,1));

//"TUE"

/*

function solution(a, b) {
    var answer = '';
    var date = b%7;
    switch (date) {
        case 0 : answer = 'FRI'; break;
        case 1 : answer = 'SAT'; break;
        case 2 : answer = 'SUN'; break;
        case 3 : answer = 'MON'; break;
        case 4 : answer = 'TUE'; break;
        case 5 : answer = 'WED'; break;
        case 6 : answer = 'THU'; break;
        default : answer = 'FRI';
    }

    return answer;
} */

/*

function getDayName(a,b){
    var answer = "";
  var MONTH = [31,29,31,30,31,30,31,31,30,31,30,31];
  var WEEK = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
  var sum = 0;
    for(var i =1; i<a; i++){
    sum+=MONTH[i-1];
  }
  answer = WEEK[(sum+b-1)%7];
  // 1월 1일은 금요일
    // 31,29,31,30,31,30,31,31,30,31,30,31

    return answer;
}
*/