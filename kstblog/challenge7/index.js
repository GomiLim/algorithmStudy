// 여기에 코드를 작성해주세요
// 귀욤댕이 지머가 디스해서 미안해~

/*
   1. filter 건다.
   2. parent가 같은거끼리, 배열에 추가해준다.
   3. 객체에 추가해 준다.
   4. 완성
*/

let container = document.querySelector('#container');
let items =  document.querySelectorAll('#source input');
// let itemsObj = {};

// // 1. 초보자 (초초보자)
// let item_array = Array.from(items);

// let animal = item_array.filter((element) => {
//    return element.getAttribute("parent") == "animal"
// })
// let fruit = item_array.filter((element) => {
//    return element.getAttribute("parent") == "fruit"
// })
// let car = item_array.filter((element) => {
//    return element.getAttribute("parent") == "car"
// })

// document.querySelector('#source > button').addEventListener('click', e => {
//    let obj = {
//       "animal": {}, 
//       "fruit": {}, 
//       "car": {}, 
//    };

//    animal.forEach((element, idx) => {
//       let name = element.name;
//       let value = Number(element.value);
//       if (value != "") obj["animal"][name] = value;
//    })

//    fruit.forEach((element, idx) => {
//       let name = element.name;
//       let value = Number(element.value);
//       if (value != "") obj["fruit"][name] = value;
//    })

//    car.forEach((element, idx) => {
//       let name = element.name;
//       let value = Number(element.value);
//       if (value != "") obj["car"][name] = value;
//    })

   // if (Object.keys(obj["animal"]).length == 0) {
   //    delete obj["animal"]
   // }
   // if (Object.keys(obj["fruit"]).length == 0) {
   //    delete obj["fruit"]
   // }
   // if (Object.keys(obj["car"]).length == 0) {
   //    delete obj["car"]
   // }

//    container.innerHTML = JSON.stringify(obj);
// });

// // 1. 중수
// let parent_name = ["animal", "fruit", "car"]

// document.querySelector('#source > button').addEventListener('click', e => {
//    let obj = {
//       "animal": {}, 
//       "fruit": {}, 
//       "car": {}, 
//    };

//    items.forEach((element, idx) => {
//       let parentName = element.getAttribute("parent");
//       let elementName = element.getAttribute("name");
//       let value = element.value;

//       if (parent_name.includes(parentName) && value != "") {
//          obj[parentName][elementName] = Number(value);
//       }
//    })

//    for (let key in obj) {
//       if (Object.keys(obj[key]).length == 0) {
//          delete obj[key]
//       }
//    }

//    container.innerHTML = JSON.stringify(obj);
// });

// 지머
let item_array = Array.from(items);

function getItemAttributes(item) {
   return {
      "parentName": item.getAttribute("parent"), 
      "elementName": item.getAttribute("name"), 
      "elementValue": item.value
   };
}

function addItem(obj, parent, name, value) {
   if (value == "") return false;

   checkDictKey(obj, parent);
   checkDictKey(obj[parent], name);

   obj[parent][name] = Number(value);

   return obj;
}

function checkDictKey(obj, key) {
   if (!obj.hasOwnProperty(key)) obj[key] = {};
   return obj;
}

document.querySelector('#source > button').addEventListener('click', e => {
   let obj = {};

   items.forEach((element, idx) => {
      let { parentName, elementName, elementValue } = getItemAttributes(element);

      let result = addItem(obj, parentName, elementName, elementValue);
      if (result) obj = result;
   })

   container.innerHTML = JSON.stringify(obj);
});


// let item_array = Array.from(items);
// let itemsObj = {};

// document.querySelector('#source > button').addEventListener('click', e => {
//    var dataParent = ele.getAttribute('parent');
//    var dataKey = ele.getAttribute('name');
//    var dataValue = ele.value;

//    let obj = {
//       // animal: itemsObj
//    };

//    container.innerHTML = JSON.stringify(obj);
// });
