module.exports = function average(...args){
    let sum = args.reduce((acc, cur) => acc + cur , 0);
    return sum / args.length;
}