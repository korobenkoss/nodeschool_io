let argArr = process.argv.slice(2);

let min = Math.min(...argArr);

console.log(`The minimum of [${argArr}] is ${min}`);