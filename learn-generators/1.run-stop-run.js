function *range(from, to) {
    // your code goes here
    let cur = from;
    while(cur <= to){
        yield cur++;
    }
  }

for (var r of range(5, 10)) {
console.log( r );
}