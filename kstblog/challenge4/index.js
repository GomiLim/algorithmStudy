// 여기에 코드를 작성해주세요
let container = document.querySelector('#container');
let childLength = container.children.length-1;
document.querySelector('#example > button').addEventListener('click', e => {
   // 버튼을 클릭할때 마다 여기가 실행됩니다
   let lastChild = container.children[childLength];
   container.insertBefore(lastChild, container.children[0]);
});