var evenOrOdd = +process.argv[2];
var evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
var sum = +process.argv[3] + evenOrOdd;
var obj = {
    [+process.argv[2] % 2 === 0 ? "even" : "odd"]: +process.argv[2],
    [+process.argv[3] + evenOrOdd]: +process.argv[3] + evenOrOdd
};
console.log(obj);