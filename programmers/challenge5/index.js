function solution(x) {
    var answer = true;
    var num = x;
    var stringNum = x.toString().split("");
    var sum = 0;
    for (var i = 0; i < stringNum.length; i++ ){
        sum += Number(stringNum[i]);
    }
    if ( num % sum > 0) return answer = false;
    else return answer = true;
}


// function Harshad(n){
//     return !(n%(n+'').split('').reduce(function (i, sum) {return +sum + +i;}));
//   }
// function solution(x) {
//     var answer = true;
//     var num = x;
//     var stringNum = x.toString().split("");
 
//     stringNum.reduce((a, c) => {
//         var sum =  Number(a) + Number(c);
//         return answer = num%sum ? false : true;
//     })
//     return answer;
// }

console.log(solution(10))