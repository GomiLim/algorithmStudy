function linearSearch(arr, target) {
    const length = arr.length;
    for (let i =0; i < length; i++) {
        if(arr[i] === target) return i;
    }
    return -1;
}

console.log(linearSearch([1,2,3,4,5],3));
console.log(linearSearch([1,2,3,4,5],0));

const sparse = [,2,,4];

console.log(sparse.length);
console.log(sparse[0]);
console.log(sparse[1]);