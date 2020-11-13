function repeat(r, f) {
    for (let i = 0; i < r; i++) {
        f(i);
    }
}

var logAll = function (i) {
    console.log(i);
}

var logOdd = function (i) {
    // if (i%2) continue; 아 continue는 반복문에서 쓰는거구나
    if (i%2) console.log(i)
}

console.log(repeat(5, logAll));
console.log(repeat(10, logOdd));