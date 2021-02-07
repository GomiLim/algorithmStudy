/*

1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

제한 조건
n은 2이상 1000000이하의 자연수입니다.

*/

function solution(n) {
    if (2 <= n <= 1000000) {
        let array = [];
        for (let i = 2; i <= n; i++) {
            let array2 = [];
            for (let j = 1; j < i; j++) {
                if (i % j === 0) {
                    array2.push(j);
                }
            }
            if (array2.length < 2) array.push(i)
        }
        return array.length;
    }
}
console.log(solution(3))

//3