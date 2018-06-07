const http = require('http');
const io = require('socket.io');
const WEBSOCKET_PORT = 3001;

const server = http.createServer();
const socket = io(server);
server.listen(WEBSOCKET_PORT);

const serial = new (require('./utils/Serial'))();
serial.start('/dev/tty.usbmodem1411', 9600, '\n');

socket.on('connection', client => {
  console.log('Client connected');
});

socket.on('push', data => {
  console.log('Received data:', data);
  if (data && data.id && data.amp) {
    serial.write(data.id + ' ' + data.amp + '\n');
  }
});

let rad = 0;
setInterval(() => {
  rad = (rad + 0.01) % (2 * Math.PI);
  serial.write(0 + ' ' + Math.sin(rad) + '\n');
}, 200);