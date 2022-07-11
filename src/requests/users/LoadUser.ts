import InitPlayer from '../entities/InitPlayer';
import { IHandleParams } from '../interfaces/requests/IHandleParams';

export class LoadUser {
  execute(params: IHandleParams) {
    return InitPlayer;
  }
}
