import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  constructor(
    @Inject('Window')
    private readonly window: Window
  ) {

  }

  triggerAlert() {
    this.window.alert('You triggered an alert.');
  }
}
