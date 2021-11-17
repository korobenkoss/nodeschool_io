module.exports = function generate(isEven) {
    // return an Iterator for even numbers if isEven is true
    // or, return an Iterator for odd numbers if isEven is false
    // If `.next(swap)` receives `true`, swap between even <-> odd

    let counter = isEven? 2 : 1;

    return {
        next: (swap) => {
            let value = swap? --counter : counter;
            counter += 2;
            
            return {done: false, value: value}
        }
    }

  }