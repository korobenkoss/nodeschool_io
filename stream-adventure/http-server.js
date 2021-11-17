const http = require('http');
const through = require('through2');

const server = http.createServer((req, res) => {
    if(req.method === 'POST'){
        req.pipe(through(write, end)).pipe(res);
    } else{
        res.end('give me a POST')
    }
});

server.listen(process.argv[2]);

function write(buffer, encoding, next){
    this.push(buffer.toString().toUpperCase());
    next();
}

function end(done){
    done();
}