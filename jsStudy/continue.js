var string = 'Hello World';
var search = 'l';
var count = 0;

for (var i = 0; i < string.length; i++) {
    console.log(count);
    if(string[i] !== search) continue;
    count++;
}

console.log(count);

/*
0
0
0
1
2
2
2
2
2
2
3
3
*/