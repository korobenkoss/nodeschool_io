const tar = require('tar');
const concat = require('concat-stream');
const crypto = require('crypto');

const algorithm = process.argv[2];
const key = process.argv[3];
const iv = process.argv[4];

// decrypt the whole tar file
const decrypt = crypto.createDecipheriv(algorithm, key, iv);

// writable stream that unzips the archive and parses it into chunks, then emits them as entries
const parser = new tar.Parse();

// deal with each entry
// each entry is a readable stream
parser.on('entry', (entry) => {
    // concat the entry(a single file that might be broken into smaller buffers) into one whole buffer
    entry.pipe(concat((wholeFileBuffer) => {
        // don't do anything to directories, only to files
        if(entry.type === 'File'){
            // create a hash from every file
            const hash = crypto.createHash('md5', { encoding: 'hex' });
            hash.update(wholeFileBuffer.toString());
            // digest the hash(summarize it) -- can only be used once on a single hash
            console.log(`${hash.copy().digest('hex')} ${entry.path}`)
        }
    }))
});

// get the encrypted archived tarball => decrypt => parse it into entries(smaller streams) => connect entry buffers into one => hash it => make the hash smaller(digest)
process.stdin.pipe(decrypt).pipe(parser);



/* // OFFICIAL SOLUTION:

const crypto = require('crypto')
const tar = require('tar')
const concat = require('concat-stream')
const through = require('through2')

const parser = new tar.Parse()
parser.on('entry', (entry) => {
    // if entry is not a file - throw it away 
    if (entry.type !== 'File') return entry.resume()

  const hash = crypto.createHash('md5', { encoding: 'hex' })
  entry.pipe(hash).pipe(concat(function (whole_hash) {
    console.log(whole_hash + ' ' + entry.path)
  }))
})

const cipher = process.argv[2]
const key = process.argv[3]
const iv = process.argv[4]

const decrypt = crypto.createDecipheriv(cipher, key, iv)

process.stdin
  .pipe(decrypt)
  .pipe(parser) */