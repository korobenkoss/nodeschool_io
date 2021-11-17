const duplexer = require('duplexer2');
const through = require('through2');
const { Writable } = require('stream');

module.exports = function(counter){
    
    let countryCounts = {};

    let inwrite = new Writable({objectMode: true});
    inwrite._write = function(chunk, encoding, next){
        countryCounts[chunk.country] = countryCounts[chunk.country] + 1 || 1;

        next();
    }

    inwrite.end = (done) => {
        counter.setCounts(countryCounts);
    }
    
    return duplexer(inwrite, counter);
}

/* OFFICIAL SOLUTION:

const duplexer = require('duplexer2')
const through = require('through2').obj

module.exports = function (counter) {
  const counts = {}
  const input = through(write, end)
  return duplexer({ objectMode: true }, input, counter)

  function write (row, _, next) {
    counts[row.country] = (counts[row.country] || 0) + 1
    next()
  }
  function end (done) {
    counter.setCounts(counts)
    done()
  }
} */