const max = +process.argv[2];

let FizzBuzz = function*(){
    let count = 0;
    
    while(count < max){
        
        let output = "";

        if(count % 3 === 0){
            output += "Fizz";
        }

        if(count % 5 === 0){
            output += "Buzz";
        }

                
        count++;

        yield output;
    }

}

for (var n of FizzBuzz) {
console.log(n);
}