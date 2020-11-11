var person = {
    name : 'Lee'
}

person.name;
person['name'];

//갱신

person.name = 'Lim';

var obj = {
    name : 'ej',
    call : function() {
        console.log(this.name);
    }
}
//메서드 축약 버전
var obj2 = {
    name : 'ej',
    call () {
        console.log(this.name);
    }
}