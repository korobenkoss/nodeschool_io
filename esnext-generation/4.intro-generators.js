module.exports = function *generate(isEven) {
    // `yield` either odd or even numbers based on `isEven`

    let value = isEven? 0 : -1;

    while(true){
        value += 2;

        yield value;
    }


  }