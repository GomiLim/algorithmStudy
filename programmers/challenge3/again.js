/*
  <h1>x만큼 간격이 있는 n개의 숫자</h1>
    <p>
        함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 <br />
        지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
    </p>
*/

function solution(x, n) {
    let list = [];
    for (let i = 1; i <=n; i ++){
        list.push(x*i)
    }
    return list;
}

console.log(solution(2,5))
