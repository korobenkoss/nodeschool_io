function attachTitle(title){
    let result = "DR. " + title;
    return result;
}

// let promise = new Promise((resolve, reject) => {
//     resolve('MANHATTAN');
// })

Promise.resolve('MANHATTAN')
    .then(attachTitle)
    .then(console.log)