import { logColors } from '../constants/logColors';

type LogType = 'warning' | 'info' | 'error' | 'success';

export function logger(type: LogType, message: string, alias?: string) {
  return console.log(
    logColors[type],
    `[${alias ? alias.toUpperCase() : type.toUpperCase()}] ${message}`,
    logColors.reset
  );
}
