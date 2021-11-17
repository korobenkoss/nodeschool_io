var promise = new Promise(function (fulfill, reject) {
    // Your solution here
    setTimeout(() => fulfill('FULFILLED!'), 300);
});
  // Your solution here
  promise.then(value => console.log(value));