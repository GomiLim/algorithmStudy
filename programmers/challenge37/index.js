/*

정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

arr은 길이 1 이상인 배열입니다.
인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

arr	return
[4,3,2,1]	[4,3,2]
[10]	[-1]
*/
function solution1(n) {
  const list = [];
  const newN = [...n].sort((a,b) => a-b).splice(1,n.length);
  for(let i = 0; i < n.length; i++) {
   for(let j = 0; j < newN.length; j++) {
     if (n[i] === newN[j]) {
       list.push(n[i]);
     }
   }
  }
  return n.length === 1 ? [-1] : list;
}

function solution2(n) {
  const newArray = [...n];
  if(n.length === 1) {
    return [-1];
  } else {
    let min = Math.min.apply(null, newArray);
    console.log(Math.min(newArray,1));
    let result = newArray.filter(arr => {
      if (arr !== min) return arr;
    })
    return result;
  }
}

function solution3(arr) {
  const array = [...arr]
  const sort = array.sort((a,b) => a-b).shift();
  // const position = arr.findIndex((e)=> e === sort)
  return arr.length <= 1 ? [-1] : arr.filter((e)=> e!== sort)
}
console.log(solution2([4,3,2,1]));