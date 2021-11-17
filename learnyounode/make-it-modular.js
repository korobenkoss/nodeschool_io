const listFiles = require('./mymodule')

const folder = process.argv[2]; 
const extension = process.argv[3];

listFiles(folder, extension, (err, data) => {
    if(err){
        console.log(err)
    }
    
    data.forEach(element => {
        console.log(element)
    });
})