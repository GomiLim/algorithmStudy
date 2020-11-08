// 여기에 코드를 작성해주세요
//q1. 왜 map은 안돌려지는거지이이이잉!
let container = document.querySelector('#container');
let items =  document.querySelectorAll('#source input');
let itemsObj = {};

console.log([...items])

let item_test = Array.from(items);
console.log(item_test)

let val = item_test.map((ele, idx) => {
   console.log(idx)
})
console.log(val)

document.querySelector('#source > button').addEventListener('click', e => {
   items.forEach(function (ele){
      var dataKey = ele.getAttribute('name');
      var dataValue = ele.value;

      /*
         itemsObj = {
            dataKey : dataValue
         }; 는
         itemObj = {
            "dataKey" : dataValue
         }; 와 동일한 내용

         따라서 선언 별개로 
         let itemsObj = {}
         itemsObj[dataKey] = dataValue
      */
      itemsObj[dataKey] = Number(dataValue);
   });

   let obj = {
      animal: itemsObj
   };

   container.innerHTML = JSON.stringify(obj);
});
