const max = process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {
        // here belongs the FizzBuzz logic
        // Hint：
        // When it's finished you have to return an object
        // with the property `done: true` but before you
        // have to set `done: false`

        let turn = "";
        let count = 0;

        return {
            next(){
                turn = "";
                count += 1;
                
                
                if(count % 3 === 0 || count % 5 === 0){
                    if(count % 3 === 0){
                        turn += "Fizz";
                    }
                    
                    if(count % 5 === 0) {
                        turn += "Buzz";
                    } 

                } else {
                    turn += count;
                }
                
                if(count <= max) {
                    return { done: false, value: turn };
                }
                
                return { done: true }
            }
        }
    }
}

for (var n of FizzBuzz) {
console.log(n);
}