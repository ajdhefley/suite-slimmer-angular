import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { TestMockMapper, TestSuite } from 'slim-suite';

export type AngularTestSuiteType = 'component' | 'service';

export class AngularTestSuite<T> extends TestSuite<T> {
    constructor(readonly classType: Type<T>, readonly testType: AngularTestSuiteType, excludeOthers: boolean = false) {
        super(classType.name, excludeOthers);
    }

    protected override initializeTest(mockMapper: TestMockMapper, declarations: any[], imports: any[], providers: any[]) {
        switch (this.testType) {
            case 'component': {
                let componentFixture = TestBed.createComponent(this.classType);
                let cls = componentFixture.componentInstance;

                // Trigger the component lifecycle prior to the tests.
                componentFixture.detectChanges();

                return cls;
            }
            case 'service': {
                let cls = TestBed.inject(this.classType);
                return cls;
            }
        }
    }

    protected override async initializeTests(mockMapper: TestMockMapper, declarations: any[], imports: any[], providers: any[]) {
        if (this.testType == 'component' && !declarations.includes(this.classType)) {
            declarations.push(this.classType);
        }
        
        TestBed.resetTestingModule();
    
        TestBed.configureTestingModule({
            declarations,
            imports,
            providers
        });

        await TestBed.compileComponents();

        // prevent Angular from resetting testing module
        TestBed.resetTestingModule = () => TestBed;
    }
}
