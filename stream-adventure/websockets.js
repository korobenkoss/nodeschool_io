const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8099');

const stream = WebSocket.createWebSocketStream(ws);

stream.write('hello\n');
stream.pipe(process.stdout);

// ws.on('open', function open() {
//     ws.send('hello\nbeep bop boop');
//   });
  
// ws.on('message', function incoming(data) {
//     console.log(data);
// });