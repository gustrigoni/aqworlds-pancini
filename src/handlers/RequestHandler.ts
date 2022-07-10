import { Requests } from './../requests';

export class RequestHandler {
  constructor(cmd: string) {
    const requests = new Requests();
    const request = requests[cmd];

    if (!request) {
      console.log('Request not found', cmd);
    }

    return request;
  }
}
