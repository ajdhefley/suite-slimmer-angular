import { AppComponent } from './app.component';
import { AngularTestSuite } from 'suite-slimmer-angular';

new AngularTestSuite(AppComponent, 'component')
    .addTest('should use fixture', (component, mocks, fixture) => {
        component.ngOnInit();
        fixture.detectChanges();
    })
    .run();
