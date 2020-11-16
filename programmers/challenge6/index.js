/********************
    FINAL APPROACH 
*********************/
// function solution(phone_number) {
//     var answer = '';
//     var phoneNum = [...phone_number];
   
//     for(var i = 0; i<phoneNum.length-4; i++) {
//         phoneNum[i]= '*';
//     }
//     return  answer = phoneNum.join('');
// }

/***************************
    FINAL APPROACH - NEW
****************************/
// function solution(phone_number) {
//     var phoneNum = [...phone_number];
//     var star_str = "*".repeat(phone_number.length - 4);
//     phoneNum.splice(0, phone_number.length - 4, star_str);
//     return phoneNum.join("");
// }

/********************
    FIRST APPROACH 
*********************/
// function solution(phone_number) {
//     var answer = '';
//     var phoneNum = phone_number+'';
//     var last = phoneNum.substr(phoneNum.length -4, phoneNum.length);       // substr 과 substring 은 다르므로 phoneNum.substr(phoneNum.length -4, 4) 가 맞는 표현이다.
//     var elseChat = phoneNum.substr(0, phoneNum.length-4);                  // string 을 자르는 함수에는 substr, substring, slice 등이 있다.

//     for(var i = 0; i<elseChat.length; i++) {
//         answer += '*';
//     }
    
//     return answer+last;
// }

/***************************
    SHORTEN FIRST APPROACH 
****************************/
// function solution(phone_number) {
//     return "*******".concat(phone_number.substr(phone_number.length - 4, 4));
//     return "*******" + phone_number.substring(phone_number.length - 4, phone_number.length);
// }

/********************
    EXTRA APPROACH 
*********************/
// function solution(phone_number) {
//     // use regular expression
//     const regex = /^\d*(?=\d{4})/;
//     const star_str = "*".repeat(phone_number.length - 4);
//     return phone_number.replace(regex, star_str);
// }

/********************
    SHORTEN EXTRA APPROACH 
*********************/
// function solution(phone_number) {
//     const regex = /\d(?=\d{4})/g;
//     return phone_number.replace(regex, "*");
// }

//왜 number로 안들가냥
console.log(solution('01086852801'));
