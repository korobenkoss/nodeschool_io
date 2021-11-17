var slice = Array.prototype.slice

function logger(namespace) {
    // SOLUTION GOES HERE
    return function(){
        console.log.apply(console, [namespace].concat(slice.call(arguments)))
        // take 'console' object, give it the arguments 'namespace + all args provided to returned func (as an actual array),
        // and then run the 'log' method of the 'console' obj
    }
}
 
var info = logger('INFO:')
info('this is an info message')
// 'INFO: this is an info message'

module.exports = logger