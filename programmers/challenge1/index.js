function solution(s) {
    var answer = '';
    // const mid = Math.floor(s.length/2);
    answer = ( s.length % 2 ) ? s[Math.floor(s.length /2)] : s[Math.floor([s.length/2])-1] +s[Math.floor([s.length/2])];
    return answer;
}
console.log(solution('일이삼사오육칠팔구'));
selectElement('.answer').innerHTML = solution('일이삼사오육칠팔구십');