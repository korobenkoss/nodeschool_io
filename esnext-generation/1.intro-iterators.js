module.exports = function makeCounter(someObj, maxNum = 10) {

    let counter = 0;
      someObj.next = function() {
        // complete me
        counter++;
        console.log(counter);
        if(counter > maxNum){
            return {done: true, value: counter};
        }

        return {done: false, value: counter};
      }

    }