const http = require('http');
// const url = require('url');

function parsetime(time){
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime(time){
    return {
        unixtime: time.getTime()
    }
}

const server = http.createServer((req, res) => {
    const myURL = new URL(req.url, `http://${req.headers.host}`);
    const urlDate = myURL.searchParams.get('iso');
    const date = new Date(urlDate);
    let result;
    
    if(myURL.pathname === '/api/parsetime'){
        result = parsetime(date);
    } else if(myURL.pathname === '/api/unixtime'){
        result = unixtime(date);
    }
    
    if(result){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(process.argv[2]);