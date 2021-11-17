// use filesystem module
const fs = require('fs');

// get the cl argument (path/to/file)
const file = process.argv[2];

// read the file into buffer
const buf = fs.readFileSync(file);

// convert buffer (stream of arbitrary data) into string
const str = buf.toString();

// split the string on '\new lines' and return an array of lines
let numLines = str.split("\n")

// last line doesn't have '\new line' character, so subtract the last array entry
let result = numLines.length - 1;

// print out the result
console.log(result);    

// SOLUTION:

// const numLines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;
// console.log(numLines);