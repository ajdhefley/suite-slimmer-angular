import { Component } from '@angular/core';
import { AppModel } from './app.model';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'before-and-after';
  hidden = false;
  model: AppModel = null as any

  constructor(private readonly service: AppService) {

  }

  hide() {
    this.hidden = true;
  }

  callMyMethod() {
    this.service.myMethod();
  }

  setModel() {
    this.model = this.service.getModel();
  }
}
