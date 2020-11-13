//shallow copy, deep cop
var a = {
    test : 1,
    test2 : {deep : [1,2,3]}
}


var c = a;

var b = {
    ...a
}
b.test1 = 2;
b.test2.deep = 2;

console.log(a)
//{ test: 1, test2: { deep: 2 } }

