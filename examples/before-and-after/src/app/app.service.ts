import { Injectable } from "@angular/core";
import { AppModel } from "./app.model";


@Injectable()
export class AppService {
  myMethod() {

  }

  getModel() {
    return new AppModel();
  }
}