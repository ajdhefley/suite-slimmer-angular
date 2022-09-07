import { Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockService, TestMockMapper, TestSuite } from 'suite-slimmer';
import { DocumentMock } from './mocks/document.mock';
import { LocationMock } from './mocks/location.mock';
import { WindowMock } from './mocks/window.mock';

export type AngularTestCallback<T> = (classInstance: T, mocks: TestMockMapper, fixture: ComponentFixture<T>) => void

export type AngularTestSuiteType = 'component' | 'service';

export class AngularTestSuite<T> extends TestSuite<T> {
    private fixture: ComponentFixture<T>;

    constructor(readonly classType: Type<T>, readonly testType: AngularTestSuiteType, excludeOthers: boolean = false) {
        super(classType.name, excludeOthers);
    }
    
    public override addTest(description: string, callback: AngularTestCallback<T>, excludeOthers?: boolean): TestSuite<T> {
        const callbackOverride = (classInstance: T, mocks: TestMockMapper) => callback(classInstance, mocks, this.fixture)
        return super.addTest(description, callbackOverride, excludeOthers);
    }

    protected override async initializeTest(mockMapper: TestMockMapper, declarations: any[], imports: any[], providers: any[]) {
        switch (this.testType) {
            case 'component': {
                let componentFixture = TestBed.createComponent(this.classType);
                let cls = componentFixture.componentInstance;

                // Trigger the component lifecycle prior to the tests.
                this.fixture = componentFixture;
                this.fixture.detectChanges();

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

        if (!providers.find(p => p.provide === 'Document')) {
            const mock = mockService(DocumentMock);
            providers.push({ provide: 'Document', useValue: mock });
            mockMapper.addExplicit(Document, mock);
        }

        if (!providers.find(p => p.provide === 'Location')) {
            const mock = mockService(LocationMock);
            providers.push({ provide: 'Location', useValue: mock });
            mockMapper.addExplicit(Location, mock);
        }

        if (!providers.find(p => p.provide === 'Window')) {
            const mock = mockService(WindowMock);
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
