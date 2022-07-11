import { IHandleParams } from './interfaces/requests/IHandleParams';
import { IHandleRequestName } from './interfaces/requests/IHandleRequestName';
import { LoadUserRequest } from './users/LoadUserRequest';
import { LoginRequest } from './users/LoginRequest';

export class Requests {
  constructor(
    private login = new LoginRequest(),
    private loadUser = new LoadUserRequest()
  ) {}

  handle(requestName: IHandleRequestName, params: IHandleParams) {
    const request = this[requestName];

    if (!request) return;

    return request.execute(params);
  }
}
