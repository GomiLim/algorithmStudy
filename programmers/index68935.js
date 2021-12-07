function solution(n) {
  var answer = 0;
  //3진법으로 나눈다
  //배열로 만든다
  let convertStrig = n.toString(3).split('');
  //뒤집는다
  convertStrig.reverse();
  //연결한다
  convertStrig = convertStrig.join('');
  //10진법으로 만든다!
  answer =  parseInt(convertStrig, 3);
  
 return answer;
  
  
}