import { IHandleParams } from '../interfaces/requests/IHandleParams';

export class Login {
  execute(params: IHandleParams) {
    return {
      Cmd: 'loginResponse',
      Success: true,
      UserID: 1,
      Username: 'raily',
      serverTime: '2017-11-21T10:43:02',
      info: 'sNews=news/News-3Jul15.swf?ab,sMap=news/Map-UI_r26.swf?ab,sBook=news/Book-16Oct17.swf?ab,sFBC=FBC-2011-03-08.swf?ab,sAssets=Assets_AWorlds-19042015.swf?ab,sWTSandbox=false,gMenu=gameMenu-AWorlds-19042015.swf?ab,sVideo=MoviePlayer/MoviePlayer1.swf1r118222r2',
      MOTD: 'Hello world',
    };
  }
}
