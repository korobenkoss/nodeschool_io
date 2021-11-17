var inputs = process.argv.slice(2);
var result = inputs
                .map(word => word[0].toUpperCase())
                .reduce((abbr, letter) => abbr + letter);
console.log(result);