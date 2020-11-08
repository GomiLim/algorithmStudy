// 여기에 코드를 작성해주세요
let container = document.querySelector('#container');

let first = document.createElement('span');
first.innerText = '안녕';

let second = document.createElement('span');
second.innerText = '하세요';

container.appendChild(first);
container.appendChild(second);