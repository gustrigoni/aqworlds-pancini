import * as net from 'net';
import { serverAddress, serverPort } from './utils/constants/Server';
import { SocketHandler } from './handlers/SocketHandler';
import { ConnectionSocket } from './utils/constants/ConnectionSocket';
import { v4 as uuidv4 } from 'uuid';

function bootstrap() {
  const server = net.createServer();

  server.on('connection', (socket: ConnectionSocket) => {
    const connection = socket;
    connection.id = uuidv4();

    return new SocketHandler(connection);
  });

  server.listen(serverPort, serverAddress, () => {
    console.log(`🔥🔥🔥 Server is running on port ${serverPort} 🔥🔥🔥`);
  });

  return server;
}

bootstrap();
