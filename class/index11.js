const toBinaryString = (num) => num.toString(2);

const solution = (n) => {
    const result = toBinaryString(n);
    let answer = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] === '1') {
            answer += Math.pow(3, result.length - i - 1);
        }
    }
    return answer;
}
