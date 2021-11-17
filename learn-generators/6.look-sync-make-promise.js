function askFoo () {
    return new Promise(function (resolve, reject) {
      resolve('foo');
    });
  }

  function run (generator) {
    // your code goes here
    var it = generator();
    var message = "";
    it.next().value.then((result) => {
        message = result;
        console.log(message)
    })

    return message;
}

  run(function* () {
    // improve: errors?
    try{
        var foo = yield askFoo();
        console.log(foo);
    } catch(e) {
        console.log(e);
    }
  });

  
  
//   OFFICIAL SOLUTION:

//   function run (generator) {
//     var it = generator();

//     function go(result) {
//       // take a look also on `Generator.prototype.return`
//       if (result.done) return result.value;

//       return result.value.then( value => go(it.next(value)), 
//                                 error => go(it.throw(error))
//                                 );
//     }

//     go(it.next());
//   }