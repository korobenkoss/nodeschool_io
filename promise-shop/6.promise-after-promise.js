first().then(res => {
    return second(res).then(onFulfilled);
})

function onFulfilled(data){
    console.log(data);
}

// As an alternative to the code above, you could also do this:
// first().then(second).then(console.log);