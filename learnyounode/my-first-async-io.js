const fs = require('fs')

const str = fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) console.log(err)
    else console.log(data.split('\n').length - 1)
})