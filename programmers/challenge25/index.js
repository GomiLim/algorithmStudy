/*
두 개 뽑아서 더하기
문제 설명
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers의 길이는 2 이상 100 이하입니다.
numbers의 모든 수는 0 이상 100 이하입니다.
입출력 예
numbers	result
[2,1,3,4,1]	[2,3,4,5,6,7]
[5,0,2,7]	[2,5,7,9,12]
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