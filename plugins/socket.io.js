// plugins/socket.io.js
import io from 'socket.io-client';

export default ({ app }, inject) => {
  // Set up the Socket.IO client
  if (process.client) {
    const socket = io('http://localhost:5001');

    // Inject the socket to the context as $socket
    inject('socket', socket);
  }
};