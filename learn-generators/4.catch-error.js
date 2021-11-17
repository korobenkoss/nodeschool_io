function *upper (items) {
    // your code goes here
    for(let i = 0; i < items.length; i++){
        try{
            if(typeof items[i] !== 'string'){
                throw new Error('NOT A STRING');
            }
            yield String(items[i]).toUpperCase();
        } catch(err) {
            yield null;
        }
        
    }
  }

  var bad_items = ['a', 'B', 1, 'c'];

  for (var item of upper(bad_items)) {
    console.log(item);
  }
  // want to log: A, B, null, C