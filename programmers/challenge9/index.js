/*

배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
2에서 나온 배열의 3번째 숫자는 5입니다.
배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때,
 commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.
*/

function solution(array, commands) {
    var answer = [];
    for(let i = 0; i <commands.length; i++) {
        // let new_arr= array.slice(commands[i][0]-1,commands[i][1]);
        // new_arr.sort((a,b) => a-b);
        // answer.push(new_arr[commands[i][2]-1])
        answer.push(array.slice(commands[i][0]-1,commands[i][1]).sort((a,b) => a-b)[commands[i][2]-1]);

    }
    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]]))


/*
function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)    

        return newArray[position - 1]
    })
}*/ 


/* 

function solution(array, commands) {
    var result = new Array();
    for( var a in commands ){
        result.push( array.slice( commands[a][0]-1, commands[a][1] ).sort((x, y) => x - y)[commands[a][2] -1] );
    }
    return result;
}
*/