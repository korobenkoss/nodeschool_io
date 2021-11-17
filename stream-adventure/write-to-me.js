const { Writable } = require('stream');

class WritableStream extends Writable{
    _write(chunk, encoding, callback){
        console.log(`writing: ${chunk.toString()}`)
        callback();
    }
}

const writeStream = new WritableStream();

process.stdin.pipe(writeStream)
