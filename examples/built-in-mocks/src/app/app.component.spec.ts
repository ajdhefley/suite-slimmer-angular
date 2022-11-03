import { AppComponent } from './app.component';
import { AngularTestSuite } from 'suite-slimmer-angular';

new AngularTestSuite(AppComponent, 'component')
    .addTest('should call window.alert', (component, mocks) => {
        component.triggerAlert();
        expect(mocks.get(Window).alert).toHaveBeenCalledWith('You triggered an alert.');
    })
    .run();