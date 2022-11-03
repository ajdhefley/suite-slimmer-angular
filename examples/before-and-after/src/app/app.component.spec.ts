import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularTestSuite } from 'suite-slimmer-angular';
import { AppComponent } from './app.component';
import { AppModel } from './app.model';
import { AppService } from './app.service';


////////////////////////////////////////
////////////////////////////// BEFORE
////////////////////////////////////////

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let service = new AppService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            providers: [
                {
                    provide: AppService,
                    useValue: service
                }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.title = 'Set in before each'
    });
  
    it('should hide', () => {
        expect(component.hidden).toBeFalse();
        component.hide();
        expect(component.hidden).toBeTrue();
    });

    it('should get mocked model', () => {
        const spy = spyOn(service, 'getModel').and.returnValue(new AppModel)
        expect(component.model).toBeNull()
        component.setModel();
        expect(component.model).not.toBeNull()
    });
  
    it('should call my method', () => {
        const spy = spyOn(service, 'myMethod')
        component.callMyMethod();
        expect(spy).toHaveBeenCalled();
    });
  
    it('should run before each', () => {
        expect(component.title).toBe('Set in before each');
    });
});

///////////////////////////////////////


///////////////////////////////////////
////////////////////////////// AFTER
///////////////////////////////////////

new AngularTestSuite(AppComponent, 'component')
    .addMocks(AppService)
    .addTest('should hide', (component) => {
        expect(component.hidden).toBeFalse();
        component.hide();
        expect(component.hidden).toBeTrue();
    })
    .addTest('should get mocked model', (component, mocks) => {
        expect(component.model).toBeNull()
        component.setModel();
        expect(component.model).not.toBeNull()
    })
    .addTest('should call my method', (component, mocks) => {
        component.callMyMethod();
        expect(mocks.get(AppService).myMethod).toHaveBeenCalled();
    })
    .addTest('should run before each', (component) => {
        expect(component.title).toBe('Set in before each');
    })
    .beforeEach((component, mocks) => {
        mocks.get(AppService).getModel.and.returnValue(new AppModel);
        component.title = 'Set in before each';
    })
    .run();

///////////////////////////////////////