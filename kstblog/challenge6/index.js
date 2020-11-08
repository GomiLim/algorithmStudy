// 여기에 코드를 작성해주세요
let container = document.querySelector('#container');
let btn = document.querySelector('#container button');
let numTxt = document.querySelector('#container span');
let num = numTxt.textContent;

//방금 지머한테 배움
btn.onclick = function () {
   num++;
   numTxt.innerText = num;
}


// 여기에 코드를 작성해주세요
let container = document.querySelector('#container');
let btn = document.querySelector('#container button');
btn.onclick = function (e) {
   document.querySelector('#container span').innerText++;
   /*
      x++ 는

      function (x) {
         let origin = x;
         x = x + 1;
         return origin;
      }

      의 뜻인거시에요
   */

}
