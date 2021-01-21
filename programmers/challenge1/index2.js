function solution(s) {
    var answer = '';
    // const mid = Math.floor(s.length/2);
    // parseInt  (뒤에 소수점도 짤리던데, 타입변환 할때만 주로 사용 ? 소수점 뒤에 짜를때 Math ? toLocalString() )
    answer = ( s.length % 2 ) ? s[Math.floor(s.length /2)] : s[Math.floor([s.length/2])-1] +s[Math.floor([s.length/2])];
    return answer;
}
console.log(solution('일이삼사오육칠팔구'));
selectElement('.answer').innerHTML = solution('일이삼사오육칠팔구십');