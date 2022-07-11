import { IHandleParams } from './interfaces/requests/IHandleParams';
import { IHandleRequestName } from './interfaces/requests/IHandleRequestName';
import { Login } from './users/Login';
import { LoadUser } from './users/LoadUser';

export class Requests {
  constructor(
    private login = new Login(), 
    private loadUser = new LoadUser()
  ) {}

  handle(requestName: IHandleRequestName, params: IHandleParams) {
    const request = this[requestName];

    if (!request) return;

    return request.execute(params);
  }
}
