import * as net from 'net';
import { serverAddress, serverPort } from './constants/server';

function bootstrap() {
  const server = net.createServer((socket) => {
    socket.write('Hello world');
  });

  server.listen(serverPort, serverAddress, () => {
    console.log(`🔥🔥🔥 Server is running on port ${serverPort} 🔥🔥🔥`);
  });

  return server;
}

bootstrap();
