const { Transform } = require('stream');

class TransformStream extends Transform{
    _transform(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }
}

const transfStream = new TransformStream();
transfStream.setEncoding('utf8')

process.stdin.pipe(transfStream).pipe(process.stdout);