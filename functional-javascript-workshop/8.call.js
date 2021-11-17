function duckCount() {
    // SOLUTION GOES HERE
    return [].slice.call(arguments).filter(obj => Object.prototype.hasOwnProperty.call(obj, 'quack')).length
    // convert 'arguments' to array.call 'hasOwnProperty('quack') on every obj (i.e. every separate argument) and filter out those that have 'quack'.check how many of those
  }

module.exports = duckCount