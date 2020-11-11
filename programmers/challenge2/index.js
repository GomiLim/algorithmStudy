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

/* 
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = `${'*'.repeat(a)}\n`;
  const col = row.repeat(b);
  console.log(col);
});
*/