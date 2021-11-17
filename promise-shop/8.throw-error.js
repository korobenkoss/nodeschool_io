require('es6-promise')

let invalidJson = process.argv[2];

function parsePromised(someJson){
    return new Promise((resolve, reject) => {
        try{
            resolve(JSON.parse(someJson));
        } catch (e) {
            reject(e);
        }
    })
    
}

function onReject(error){
    console.log(error.message);
}

parsePromised(invalidJson)
    .then(null, onReject);