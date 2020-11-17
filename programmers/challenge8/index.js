function solution(arr) {
    var answer = 0;
    var total =  arr.reduce((arr,cur) => arr + cur);
    return answer = total / arr.length;
}

console.log(solution([1,2,3,4]))

