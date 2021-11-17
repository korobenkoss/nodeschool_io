let inputs = process.argv.slice(2);
let result = inputs.map(e => e[0]).reduce((word, letter) => word + letter, "");
console.log(`[${inputs}] becomes \"${result}\"`);