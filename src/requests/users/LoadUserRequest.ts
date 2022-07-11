import InitPlayer from '../entities/InitPlayer';
import { IHandleParams } from '../interfaces/requests/IHandleParams';

export class LoadUserRequest {
  execute(params: IHandleParams) {
    return InitPlayer;
  }
}
