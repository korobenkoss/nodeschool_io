const concat = require('concat-stream');

const concatStream = concat(gotInput);

function gotInput(inputBuffer){
    let body = inputBuffer.toString().split('').reverse().join('');
    process.stdout.write(body)
}

process.stdin.pipe(concatStream);