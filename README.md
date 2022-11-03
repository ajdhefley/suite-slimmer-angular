# suite-slimmer-angular

Streamlines Angular testing.

* Encapsulates test module setup, reducing code duplication and boilerplate
* Injects tested class and mocked dependencies directly into each test, no need for managing global variables
* Mocks and spies on dependencies dynamically so you don't have to do it yourself
* Provides fully spyable mocks for `window`, `document`, and `location` out of the box
* Executes hidden optimizations such as configuring the test module only once per suite
* Easily phased into existing projects with no additional configuration required

## Usage

### Installation

Install the npm package.

```
npm install --save-dev suite-slimmer-angular
```

### Creating a test

Instantiate a test suite, providing the class type being tested.

```
import { AngularTestSuite } from 'suite-slimmer-angular'

// Test components
new AngularTestSuite(MyExampleComponent, 'component')

// Or test services
new AngularTestSuite(MyExampleHttpService, 'service')
```

On this object, the following methods are available and chainable:

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

## Frameworks

The following test frameworks are supported:

* Jasmine
* Jest
* Mocha

## Examples

See examples [here](https://github.com/ajdhefley/suite-slimmer-angular/tree/main/examples).
