function solution(x, n) {
//     var answer = [];
    // for ( let i = 0; i < n; i++ ) answer.push(x*(i+1));
//     console.log(Array(n).fill(x).forEach((v, i) => (i+1)*v));
//    var a =  Array(n).fill(x).forEach(function(ele, idx) {
    //forEach
//         return (idx+1)*ele;
//     })
//     console.log(a)
//     console.log(Array(n).fill(x).map((v, i) => (i+1)*v));

//     return answer;

    //q. for문 앞에 리턴을 붙일 순 없는것일까
    //q. forEach는 안되는거지
    // console에서 forEach쓸 수 있는거 확인했는데 왜 안되는지 모르겠음
    //-> retutn 을 받을 수 없는 것 입니당.
    var answer = [];
    for(var i=1; i <=n; i++){
        answer.push(x * i)
    }

    //i를 1로 잡으니까 겁나 코드가 간단해지는군요 ???
    
    return answer;
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

/*
var score = 80;
var copy = score;

console.log( score === copy);
console.log('score', score);
console.log('copy', copy);

score = 100;

console.log('score', score);
console.log('copy', copy);


var obj = {
    x : 1;
}

var objCopy = obj;

console.log( objCopy === obj);

*/