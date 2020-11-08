// 여기에 코드를 작성해주세요
function toggleClassColor(obj) {
   return toggleColor(obj.style.color);
}

function toggleColor (color) {
   if (color == "red") return "blue"
   return "red"
}

let container = document.querySelector('#container');
let txt = document.getElementById("text");
let btn = document.querySelector('#container button');

btn.onclick = function(e) {
   txt.style.color = toggleClassColor(txt);
}





///////////////////////////////////////////////////
/*
let btn = document.querySelector('#container button');
let txt = document.querySelector('#text');

btn.addEventListener('click', ele => {
   txt.classList.toggle('check');
   txt.classList.contains('check')? txt.style.color = '#ff0000' : txt.style.color = '#0000ff';
});
*/