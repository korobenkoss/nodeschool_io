const net = require('net');

const server = net.createServer((socket) => {

    Number.prototype.pad = function(size) {
        var s = String(this);
        while (s.length < (size || 2)) {s = "0" + s;}
        return s;
      }

    
    let date = new Date();

    timestamp = `${date.getFullYear()}-${(date.getMonth() + 1).pad(2)}-${date.getDate().pad(2)} ${date.getHours().pad(2)}:${date.getMinutes().pad(2)}\n`;
    
    socket.end(timestamp);
})

server.listen(process.argv[2]);

// OFFICIAL SOLUTION:

// 'use strict'
//     const net = require('net')

//     function zeroFill (i) {
//       return (i < 10 ? '0' : '') + i
//     }

//     function now () {
//       const d = new Date()
//       return d.getFullYear() + '-' +
//         zeroFill(d.getMonth() + 1) + '-' +
//         zeroFill(d.getDate()) + ' ' +
//         zeroFill(d.getHours()) + ':' +
//         zeroFill(d.getMinutes())
//     }

//     const server = net.createServer(function (socket) {
//       socket.end(now() + '\n')
//     })

//     server.listen(Number(process.argv[2]))