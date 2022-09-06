import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TestMockMapper, TestSuite } from 'slim-suite';
import { DocumentMock } from './mocks/document.mock';
import { LocationMock } from './mocks/location.mock';
import { WindowMock } from './mocks/window.mock';

export type AngularTestSuiteType = 'component' | 'service';

export class AngularTestSuite<T> extends TestSuite<T> {
    constructor(readonly classType: Type<T>, readonly testType: AngularTestSuiteType, excludeOthers: boolean = false) {
        super(classType.name, excludeOthers);
    }

    protected override async initializeTest(mockMapper: TestMockMapper, declarations: any[], imports: any[], providers: any[]) {
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

        if (!providers.find(p => p.provide === Document)) {
            const mock = new DocumentMock();
            providers.push({ provide: 'Document', useValue: mock });
            mockMapper.addExplicit(Document, mock);
        }

        if (!providers.find(p => p.provide === Location)) {
            const mock = new LocationMock();
            providers.push({ provide: 'Location', useValue: mock });
            mockMapper.addExplicit(Location, mock);
        }

        if (!providers.find(p => p.provide === Window)) {
            const mock = new WindowMock();
            providers.push({ provide: 'Window', useValue: mock });
            mockMapper.addExplicit(Window, mock);
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
