function add(x,y) {
    return x +y;
}

console.log(add)
console.dir(add);

var add1 = (function() {
    var a = 10;
    return function (x,y) {
        return x+y+a;
    }
})();

console.log(add1(1,2));

//요렇게도 되는구나
var res = (function (a,b) {
    return a+b;
})(1,3);
console.log(res);

//재귀함수 -> 간단한 반복문을 없애줌

function countDown(n){
    if(n<0) return;
    console.log(n);
    countDown(n-1);
}

// countDown(10);

var factorial = function foo(n) {
    if(n<=1) return 1;
    return n * foo(n-1);
}

function factorialWhile(n) {
    if (n <= 1) return 1;

    var res = n;
    while(--n) res *= n;
    return res;
}

console.log( factorial(5));
console.log( factorialWhile(5));