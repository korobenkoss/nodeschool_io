const { Readable } = require('stream');

class ReadableStream extends Readable{ // or const stream = new Readable( { read(){ } } )
  _read(size) {

  }
}

const stream = new ReadableStream();

stream.push(process.argv[2]);
stream.pipe(process.stdout);

