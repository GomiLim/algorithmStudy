function solution(phone_number) {
    var answer = '';
    var phoneNum = [...phone_number];
   
    for(var i = 0; i<phoneNum.length-4; i++) {
        phoneNum[i]= '*';
    }
    return  answer = phoneNum.join('');
}
// function solution(phone_number) {
//     var answer = '';
//     var phoneNum = phone_number+'';
//     var last = phoneNum.substr(phoneNum.length -4, phoneNum.length);
//     var elseChat = phoneNum.substr(0, phoneNum.length-4);
//     for(var i = 0; i<elseChat.length; i++) {
//         answer += '*';
//     }
    
//     return answer+last;
// }

//왜 number로 안들가냥
console.log(solution('01086852801'));