import {Injectable} from "@angular/core";
@Injectable()

export class LoggerService {
  log(s: string) {
    console.log(s);
  }
}
