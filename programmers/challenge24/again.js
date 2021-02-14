/*
카카오 인턴쉽
크레인 인형뽑기 게임

[제한사항]
board 배열은 2차원 배열로 크기는 5 x 5 이상 30 x 30 이하입니다.
board의 각 칸에는 0 이상 100 이하인 정수가 담겨있습니다.
0은 빈 칸을 나타냅니다.
1 ~ 100의 각 숫자는 각기 다른 인형의 모양을 의미하며 같은 숫자는 같은 모양의 인형을 나타냅니다.
moves 배열의 크기는 1 이상 1,000 이하입니다.
moves 배열 각 원소들의 값은 1 이상이며 board 배열의 가로 크기 이하인 자연수입니다.
입출력 예
board	moves	result
[[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]	[1,5,3,5,1,2,1,4]	4
*/

function solution(board, moves) {
  let result = [];
  let count = 0;
  for (let i =0; i < moves.length; i++) {
    for(let j=0; j < board.length; j++) {
      console.log("================================");

      console.log('i: ', i);
      console.log('j: ', j);
      console.log('board: ', board);
      console.log('moves: ', moves);
      console.log('moves[i]-1: ', moves[i]-1);
      console.log(`board[${j}][${moves[i]-1}]: `, board[j][moves[i]-1]);

      if(board[j][moves[i]-1] !== 0) {
        console.log('result: ', result);
        console.log('result length: ', result.length);
        console.log(`result[${result.length-1}]: `, result[result.length-1]);
        if(result.length > 0) {
          if( result[result.length] === board[j][moves[i]-1]) {
            count++;
            result.pop();
            board[j][moves[i]-1] = 0;
            console.log("dull popped: ", board[j]);
            console.log("count increase: ", count);
          } else {
            result.push( board[j][moves[i]-1]);
            board[j][moves[i]-1] = 0;
            console.log("dull popped: ", board[j]);
            console.log("dull stacked: ", result);
          }
        } else {
          result.push( board[j][moves[i]-1]);
          board[j][moves[i]-1] = 0;
          console.log("dull popped: ", board[j]);
          console.log("dull stacked: ", result);
        }
        break;
      } else {
        continue;
      }
    }
  }

  return count * 2
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4]));