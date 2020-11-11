var done = true;
var doneTrue = true;
var doneFalse = false;

var message = '';
var message_true = '';
var message_false = '';

// if (done) message = '완료';
//true
message_true = doneTrue && '완료';
console.log(message_true);

//false
message_false = doneFalse || '미완료';
console.log(message_false);

//3항
message = done ? '완료' : '미완료';
console.log(message);

//단축평가
//null undefined 는 falsely한 값이라서, 첫번째 부분에서 false 가 걸려버리면 elem 을 보여주고 끝남 
//아 false * true = false 
var elem = null;
var value = elem && elem.value;
console.log(value);

//옵셔널 체이닝
// ?.

var elem2 = null;
var value2 = elem2 && elem2.value;
console.log(value2);