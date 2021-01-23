/*
 <h1>가운데 글자 가져오기</h1>
    <p>
        단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.<br />
        재한사항<br />
        s는 길이가 1 이상, 100이하인 스트링입니다.<br />
    </p>
*/


process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    // const a = Number(n[0]), b = Number(n[1]);
    const a = 3; const b = 5;
    let txt = '';
    let c = 0;
    // while ( c === b ) { 일단 true 로 만들어줘야하는데 안만들어줌 ㅇㅇ
    while ( c < b ) {
        for (let i = 0; i < a; i ++) {
             txt += '*';
        }
        txt += '\n';
        c++;
        // if (c === b) break;
    }
    console.log(txt)
});
