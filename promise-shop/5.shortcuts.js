let promise = Promise.reject('i rejected');
promise.catch(console.log);