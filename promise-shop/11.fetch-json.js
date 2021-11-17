const http = require('q-io/http');

http.read('http://localhost:1337')
    .then(body => console.log(JSON.parse(body)))
    .catch(error => console.log(error)); 