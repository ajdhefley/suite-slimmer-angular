# suite-slimmer-angular

Streamlines Angular testing.

* Encapsulates test module setup, reducing code duplication and boilerplate
* Injects tested class and mocked dependencies directly into each test, no need for managing global variables
* Mocks and spies on dependencies dynamically so you don't have to do it yourself
* Provides fully spyable mocks for `window`, `document`, and `location` out of the box
* Executes hidden optimizations such as configuring the test module only once per suite
* Easily phased into existing projects with no additional configuration required

## Usage

Install the npm package.

```
npm install --save-dev suite-slimmer-angular
```

Instantiate a test suite, providing the type of the component you are testing as a required argument.

```
import { AngularTestSuite } from 'suite-slimmer-angular'

...

new AngularTestSuite(MyExampleComponent, 'component')
```

Or, if you are testing a service:

```
new AngularTestSuite(MyExampleHttpService, 'service')
```

On this object, the following methods are available and can be chained:

* addImports
* addDeclarations
* addProviders
* addMocks
* addTest
* beforeEach
* afterEach
* beforeAll
* afterAll
* run

No special configuration is required. As long as your tests are configured under Jest, they will run with suite-slimmer. Jasmine support is coming soon.

### Examples

Make your tests more enjoyable to look at and spend less time writing them. In the example below, both the before and after accomplish the same result.

__Before:__

```
describe('TestedComponent', () => {
    let component: TestedComponent;
    let fixture: ComponentFixture<TestedComponent>;
    let mockFactory: MyFactory;
    let mockComponentOptions: ComponentOptions;

    beforeEach(async () => {
        mockFactory = new MyFactory();
        mockComponentOptions = {
            getOption: () => { ... }
        };

        await TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [
                TestedComponent,
                MyDeclaredComponent,
                MyOtherDeclaredComponent
            ],
            providers: [
                { provide: MyFactory, useValue: mockFactory }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.options = mockComponentOptions;
    });

    it('should', () => {
        mockFactory.getFactoryObject = jest.fn().mockreturnValue(of());
        component.factoryObj = mockFactory.getFactoryObject();
        ...
    });
});
```

__After:__

```
new AngularTestSuite(TestedComponent, 'component')
    .addImports(FormsModule)
    .addDeclarations(MyDeclaredComponent, MyOtherDeclaredComponent)
    .addMocks(MyFactory, ComponentOptions)
    .beforeEach((component, mocks) => {
        mocks.get(ComponentOptions).getOption.mockReturnValue(...);
        component.options = mocks.get(ComponentOptions);
    })
    .addTest('should', (component, mocks) => {
        component.factoryObj = mocks.get(MyFactory).getFactoryObject();
        ...
    })
    .run();
```

---

Test window functions, without any additional setup or configuration. Mocks are injected directly into your tests, with Window, Document, and Location included by default.

```
new AngularTestSuite(TestedComponent, 'component')
    .addTest('should call alert', (component, mocks) => {
        const windowMock = mocks.get(Window)
        component.clickSomeBtn();
        expect(windowMock.alert).toHaveBeenCalledWith('You clicked the button!');
    })
```

----

Acccess the component fixture, if needed.

```
new AngularTestSuite(TestedComponent, 'component')
    .addTest('do some stuff', (component, mocks, fixture) => {
        component.value = 42;
        fixture.detectChanges();
    })
```
