function solution(x, n) {
    var answer = [];
    // for ( let i = 0; i < n; i++ ) answer.push(x*(i+1));
    console.log(Array(n).fill(x).forEach((v, i) => (i+1)*v));
   var a =  Array(n).fill(x).forEach(function(ele, idx) {
        return (idx+1)*ele;
    })
    console.log(a)
    console.log(Array(n).fill(x).map((v, i) => (i+1)*v));

    return answer;

    //q. for문 앞에 리턴을 붙일 순 없는것일까
    //q. forEach는 안되는거지
    // console에서 forEach쓸 수 있는거 확인했는데 왜 안되는지 모르겠음
}

console.log(solution(2,5))

// function solution(x, n) {
//     return Array(n).fill(x).map((v, i) => (i + 1) * v)
// }

/*

fill() :  메서드는 배열의 모든 요소를 지정한 시작 인덱스부터 종료 인덱스까지 정적인 값으로 채웁니다
https://www.w3schools.com/jsref/jsref_fill.asp
https://ipex.tistory.com/entry/JavaScript-Arrayprototype-%EC%A2%85%EB%A5%98-1-concat-fill-filter-find-findIndex-includes-indexOf-1
*/