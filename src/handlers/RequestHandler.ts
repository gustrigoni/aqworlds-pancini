import { camelCase } from 'camel-case';
import { Requests } from './../requests';
import { IRequestHandler } from './interfaces/IRequestHandler';

export class RequestHandler {
  constructor({ requestName, params }: IRequestHandler) {
    const requests = new Requests();
    const request = requests.handle(camelCase(requestName), params);

    if (!request) {
      throw new Error(`Request not found - ${requestName}`);
    }

    return request;
  }
}
