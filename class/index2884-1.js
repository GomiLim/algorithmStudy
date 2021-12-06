/**
 * hint)
 * change hour, minute to only minute
 * 
 * ex) 10: 10 => 10 * 60 + 10 => 600
 *     45 mins before 10:10 => 600 - 45 = 555 => 555 / 60 = 9 ... 15 => 9:15
 */

const solution = (time) => {
  const setMinute = (time[0]*60) + +time[1] - 45;
  const aa = setMinute < 0 ?  parseInt((setMinute + (24 *60))/60) : parseInt(setMinute / 60);
  const bb = setMinute < 0 ? (setMinute % 60) + 60 : (setMinute % 60);

  return [aa, bb].join(' ');
}

const sol = (time) => {
  const totalMinute = (time[0] * 60) + +time[1];
  const newMinute = (totalMinute > 45) ? totalMinute - 45 : totalMinute + 24 * 60 - 45;

  const hour = parseInt(newMinute / 60);
  const minute = newMinute % 60;

  return [hour, minute].join(' ');
}

const sol2 = (time) => {
  const totalMinute = (time[0] * 60) + +time[1] - 45;

  const hour = (totalMinute < 0) ? 23 : parseInt(totalMinute / 60);
  const minute = (totalMinute < 0) ? totalMinute % 60 + 60 : totalMinute % 60;

  return [hour, minute].join(' ');
}


let fs = require('fs');
let input = (require('fs').readFileSync('ex.txt')+'').trim().split(` `);

console.log(solution(input));
console.log(sol2(input));
