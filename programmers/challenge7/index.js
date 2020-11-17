function solution(n) {
    return answer = '수박'.repeat(n/2) + ((n%2) ? '수' : '');
}

console.log(solution(9))

// function solution(n) {
//     var answer = '';
//     const soo = '수'
//     const bak = '박'
//     for(let i = 1; i<= n; i++){
//         (i%2)?answer+=soo:answer+=bak
//     }
//     return answer;
// }