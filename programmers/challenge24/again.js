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
  const result_list = [];
  let pop_item_count = 0;

  for (let i = 0; i < moves.length; i++) {
    let real_move_idx = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][real_move_idx] != 0) {
        let top_item = board[j][real_move_idx];
        // console.log(`found item: ${top_item} / index: ${real_move_idx}`);

        board[j][real_move_idx] = 0;  // 아이템 뽑았기에 0으로 아이템 없애준다
        if (result_list.length > 0) {
          // 결과 바구니에 인형이 존재할 때
          if (result_list[result_list.length - 1] == top_item) {
            // 결과 바구니 맨 위 아이템이 방금 뽑은 아이템과 동일할 때
            pop_item_count++;
            result_list.pop();
          } else {
            //  동일하지 않을 때 - 아이템 추가
            result_list.push(top_item);
          }
        } else {
          // 바구니가 비었을 때
          result_list.push(top_item);
        }

        // if (result_list.length > 0 && result_list[result_list.length - 1] == top_item) {
        //   // console.log(`last item: ${result_list[result_list.length - 1]}`)
        //   pop_item_count++;
        //   result_list.pop();
        // } else {
        //   // console.log(`new item add`);
        //   result_list.push(top_item);
        // }
        break;
      }
    }
    // console.log(result_list)
  }
  
  // for (let i = 0; i < moves.length; i++) {
  //   console.log(board[i][moves[i]-1]);
  // }

  return pop_item_count * 2;    // 2개씩 터지므로 2배
}


/**
 * 자료구조
 * 
 * 1. 링크드 리스트
 * 2. 큐
 * 3. 스택
 * 4. 해쉬
 * 5. 맵
 * 6. 집합 (set)
 * 7. 사전 (dictionary - object)
 * 8. 배열
 * 
 큐 FIFO First in First out
 스택 FILO First in Last out
 */




console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]));