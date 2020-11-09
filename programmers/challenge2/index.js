process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let txt = '';
    let c = 0;
    while ( true ) {
        for (let i = 0; i < a; i ++) {
             txt += '*';
        }
        txt += '\n';
        c++;
        if (c === b) break;
    }
    console.log(txt)
});