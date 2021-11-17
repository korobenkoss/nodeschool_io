let userArray = process.argv.slice(2);

let userInfo = {};

[ , userInfo.username, userInfo.email] = userArray;

console.log(userInfo);