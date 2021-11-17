function add(input1){
    return function(input2){
        return input1 + input2;
    }
}

module.exports = add;