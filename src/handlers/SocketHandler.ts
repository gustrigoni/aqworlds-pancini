import { IConnectionSocket } from 'src/handlers/interfaces/IConnectionSocket';
import { SocketConnetionEnum } from './enums/SocketConnetionEnum';
import { RequestHandler } from './RequestHandler';

export class SocketHandler {
  public sockets: IConnectionSocket[] = [];
  private connection: IConnectionSocket;

  public handle(id: string, socket: IConnectionSocket) {
    this.connection = socket;
    this.connection.id = id;

    this.connection.setNoDelay();
    this.connection.setDefaultEncoding('utf8');

    this.sockets.push(socket);

    this.connection.on('data', (data) => {
      return this.handlerData(data);
    });
  }

  private handlerData = (data: Buffer) => {
    const stringSocketMessage = data.toString('utf-8');

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
