// 여기에 코드를 작성해주세요
// solution 함수의 input 인자로 ee4jjJ6FSWFpxnKj2zbq 와 같은 랜덤한 문자열이 인자로 주어집니다
// 이 인자값에서 숫자만 남겨서 리턴해주도록 아래 함수를 작성해주세요

function solution(input) {
    let answer;
    var res = input.replace(/[^0-9]/g,"");
    answer = res;
    return answer;
 }