import openSocket from 'socket.io-client';
const socket = openSocket('/');

// export function subscribeToTimer(cb) {
//   socket.on('timer', timestamp => cb(null, timestamp))
//   socket.emit("subscribeToTimer", 2000)
// }

export function sendMessage(message) {
  socket.emit("message", message)
}

export function receiveMessage(cb) {
  socket.on("AIMessage", messsage => cb(null, messsage))
}