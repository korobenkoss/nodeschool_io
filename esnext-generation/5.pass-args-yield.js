module.exports = function *multiplier() {
    // `yield` all integers multiplied by the value passed in via `.next()`
    var num = 0;
    var mult = 1;
    
    while(true){
        mult = yield ++num * mult;
        if(!mult) {
            mult = 1;
        }
    }
  }