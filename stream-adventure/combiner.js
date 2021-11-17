const combine = require('stream-combiner');
const split = require('split2');
const through = require('through2');
const zlib = require('zlib');


module.exports = function () {

    // create object for every genre (define here to be accessible for both write() and end())
    let genre;

    // split() will provide input divided by lines, and feed them to through() line by line
    function write(line, encoding, next){
        // skip empty lines
        if(line.length === 0) return next();
        
        // turn each line into proper JSON
        const row = JSON.parse(line);

        if(row.type === 'genre'){
            // if the object for current genre already exists
            if(genre){
                // add the object to the stream
                this.push(JSON.stringify(genre) + '\n');
            }
            // group books by genre
            genre = {name: row.name, books: []};
        } 
        // after the object for the current genre is created
        else if(row.type === 'book'){
            // add books to current genre
            genre.books.push(row.name);
        }

        // move to the next line
        next();
    }

    function end(done){
        // add grouped books to the stream
        this.push(JSON.stringify(genre) + '\n');
        done();
    }

  return combine(split(), through(write, end), zlib.createGzip())
}