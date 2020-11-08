// 여기에 코드를 작성해주세요
let container = document.querySelector('#container');
let inputValue = document.querySelector('#data').value;

for(let i =0; i < inputValue; i++ ) {
   let itemBox = document.createElement('div');
   itemBox.innerText = i+1;
   container.appendChild(itemBox);
};

