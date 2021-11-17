function reduce(arr, fn, initial) {
    // SOLUTION GOES HERE
    if(!arr.length) return initial
    element = arr[0];
    rest = arr.slice(1)
    initial = fn(initial, element)
    
    return reduce(rest, fn, initial)
  }

  module.exports = reduce
