import * as net from 'net';
import { serverAddress, serverPort } from './utils/constants/server';
import { SocketHandler } from './handlers/SocketHandler';
import { v4 as uuidv4 } from 'uuid';
import { IConnectionSocket } from './handlers/interfaces/IConnectionSocket';
import { Requests } from './requests';
import { logger } from './utils/logs/logger';

function bootstrap() {
  const server = net.createServer();
  const socketHandler = new SocketHandler();
  const requets = new Requests();

  server.on('connection', (socket: IConnectionSocket) => {
    return socketHandler.handle(uuidv4(), socket);
  });

  server.listen(serverPort, serverAddress, () => {
    console.time('Time to init');

    logger('info', `🔥 Server is running on port: ${serverPort} `);

    console.group();
    for (const request of Object.keys(requets)) {
      logger('success', `${request} has been loaded`);
    }
    console.groupEnd();

    console.timeEnd('Time to init');
  });

  return server;
}

bootstrap();
