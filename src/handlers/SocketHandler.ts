import { ConnectionSocket } from 'src/utils/constants/ConnectionSocket';
import { SocketConnetionEnum } from './enums/SocketConnetionEnum';
import { RequestHandler } from './RequestHandler';

export class SocketHandler {
  public connection: ConnectionSocket;

  constructor(socket: ConnectionSocket) {
    this.connection = socket;
    this.connection.setNoDelay();
    this.connection.setDefaultEncoding('utf8');
    this.connection.on('data', this.handlerData);
  }

  private handlerData = (bufferSocketMessage: Buffer) => {
    const stringSocketMessage = bufferSocketMessage.toString('utf-8');

    if (stringSocketMessage[0] === '<') {
      this.sendResponse(SocketConnetionEnum.CROSS_DOMAIN_POLICY);
      return;
    }

    const jsonSocketMessage = JSON.parse(
      stringSocketMessage.replace('\x00', '')
    );

    return this.sendResponse(
      new RequestHandler({
        requestName: jsonSocketMessage.Cmd,
        params: jsonSocketMessage.Params,
      })
    );
  };

  public sendResponse = (response: string | object) => {
    response =
      typeof response === 'object' ? JSON.stringify(response) : response;
    this.connection.write(`${response}\x00`);
  };
}
