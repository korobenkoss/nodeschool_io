function *factorial(n){
// your code here
    let cur = 1;
    for(let i = 1; i <= n; i++){
        cur *= i;
        yield cur;
    }
}

for (var n of factorial(5)) {
console.log(n)
}
// 1, 2, 6, 24, 120