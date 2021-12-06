/**
 * hint)
 * change hour, minute to only minute
 * 
 * ex) 10: 10 => 10 * 60 + 10 => 600
 *     45 mins before 10:10 => 600 - 45 = 555 => 555 / 60 = 9 ... 15 => 9:15
 */

const solution = (time) => {
  const setHour = time[0] < 10 ? '0'+time[0]:time[0];
  const setMinute = time[1] < 10 ? '0'+time[1]:time[1];

  const tYear= new Date().getFullYear();
  const tMonth= new Date().getMonth() < 10 ? '0'+new Date().getMonth() : new Date().getMonth();
  const tDate= new Date().getDate() < 10 ? '0'+new Date().getDate() : new Date().getDate();

  const d = new Date(`${tYear}-${tMonth}-${tDate}T${setHour}:${setMinute}`);
  d.setMinutes(d.getMinutes() - 45);

  return [d.getHours(), d.getMinutes()].join(' ');
}

const sol = (time) => {
  const hour = time[0];
  const minute = time[1];

  const today = new Date();
  today.setHours(hour);
  today.setMinutes(minute-45);

  return `${today.getHours()} ${today.getMinutes()}`;
}

let fs = require('fs');
let input = (require('fs').readFileSync('ex.txt')+'').trim().split(` `);

// console.log(solution(input));
console.log(sol(input));