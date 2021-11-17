const through = require('through2');
const split = require('split2');


process.stdin.pipe(split()).on('data', (line) => {
    console.log(line.toString().toLowerCase())
})