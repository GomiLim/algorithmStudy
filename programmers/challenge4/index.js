function solution(arr1, arr2) {
    var answer = [];
    for (var i = 0; i < arr1.length; i++) {
        var new_arr = [];               // 0x000003 new_arr []
        for(var j = 0; j < arr1[0].length; j++) {
            new_arr.push(arr1[i][j] + arr2[i][j])
        }                               // [7, 4]
        answer.push(new_arr);           // new_arr = [5, 5, 7, 4], answer = [[5, 5, 7, 4], [5, 5, 7, 4]] => [new_arr, new_arr] [0x000002, 0x0000003]
        console.log(answer)
    }

    console.log(answer);            // call by reference, call by value - (shallow copy, deep copy)
    return answer;
}

result = solution([[1,2],[2,3]], [[4,3],[5,1]]);
console.log("===== result =======");
console.log(result);


var arr = [];
for(let i = 0; i < 2; i++) {
    var a = i;
    arr.push(a);
}
console.log(arr);
