function all(p1, p2){
    return new Promise((resolve, reject) => {
        let counter = 0; 
        let result = [];
    
        p1.then((val1) => {
            counter++;
            result.push(val1);
            if(counter >= 2){
                resolve(result);
            }
    
        });
        p2.then((val2) => {
            counter++;
            result.push(val2);
            if(counter >= 2){
                resolve(result); 
            }
        });
    });

}

all(getPromise1(), getPromise2()).then(console.log);