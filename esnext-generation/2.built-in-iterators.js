module.exports = function filterForNumbers(iterable) {
    var numericArray = [];

    for(var elem of iterable){
        if(typeof elem == 'number'){
            numericArray.push(elem)
        }
    }

    return numericArray;
  }