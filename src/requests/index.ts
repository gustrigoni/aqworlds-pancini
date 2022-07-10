import { Login } from './users/Login';

export class Requests {
  constructor() {
    return {
      Login: new Login(),
    };
  }
}
