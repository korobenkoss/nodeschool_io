const http = require('q-io/http');

http.read('http://localhost:7000')
    .then((uid) => {
        return http.read(`http://localhost:7001/${uid}`)
    })
    .then((usrObj) => {
        console.log(JSON.parse(usrObj));
    })
    .catch(console.error);