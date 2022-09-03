# slim-suite-angular

Eliminates boilerplate code for Angular test files, making them much simpler and smaller.

* Provides an elegant method-chaining API
* Encapsulates test module setup
* Streamlines dependency mocking by generating providers and replacing functions with spies behind the scenes
* Executes additional optimizations (such as purging stylesheets/assets between tests, and configuring the test module only once per suite)
* Reduces the amount of test code that needs to be written, read, and maintained
* Greatly increases developer productivity with less time spent on tests
* Can easily be introduced into existing projects without disruption

## Usage

Install the npm package.

```
npm install --save-dev slim-suite-angular
```

Instantiate a test suite, providing the type of the component you are testing as a required argument.

```
import { AngularTestSuite } from 'slim-suite-angular'

...

new AngularTestSuite(MyExampleComponent, 'component')
```

Or, if you are testing a service:

```
new AngularTestSuite(MyExampleHttpService, 'service')
```

On this object, the following methods available and can be chained:

* addImports
* addDeclarations
* addProviders
* addMocks
* addTest
* beforeEach
* afterEach
* run

No special configuration is required. As long as your tests are configured under Jest, they will run with slim-suite. A Jasmine plugin is coming soon.

### Examples

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
