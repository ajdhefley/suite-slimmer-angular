import { Type } from '@angular/core';
import { ComponentFixture, getTestBed, TestBed, TestBedStatic } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { MockMapper, TestSuite } from 'suite-slimmer';
import { DocumentMock } from './mocks/Document.mock';
import { LocationMock } from './mocks/Location.mock';
import { WindowMock } from './mocks/Window.mock';

export type AngularTestCallback<T> = (classInstance: T, mocks: MockMapper, fixture: ComponentFixture<T>) => void;

export type AngularTestSuiteType = 'component' | 'service';

export class AngularTestSuite<TClass> extends TestSuite<TClass> {
    private fixture: ComponentFixture<TClass>;
    private resetTestingModule: () => TestBedStatic;

    constructor(readonly classType: Type<TClass>, readonly testType: AngularTestSuiteType, excludeOthers: boolean = false) {
        super(classType.name, excludeOthers);
    }
    
    public override addTest(description: string, callback: AngularTestCallback<TClass>, excludeOthers?: boolean) {
        const callbackOverride = (classInstance: TClass, mocks: MockMapper) => callback(classInstance, mocks, this.fixture)
        return super.addTest(description, callbackOverride, excludeOthers);
    }

    protected override async initializeTest(mockMapper: MockMapper, declarations: any[], imports: any[], providers: any[]) {
        switch (this.testType) {
            case 'component': {
                let componentFixture = TestBed.createComponent(this.classType);
                let cls = componentFixture.componentInstance;
                this.fixture = componentFixture;
                return cls;
            }
            case 'service': {
                let cls = TestBed.inject(this.classType);
                return cls;
            }
        }
    }

    protected override async initializeTests(mockMapper: MockMapper, declarations: any[], imports: any[], providers: any[]) {
        const mocker = (this as any).mockMapper.mocker;

        if (this.testType == 'component' && !declarations.includes(this.classType)) {
            declarations.push(this.classType);
        }

        if (!providers.find(p => p.provide === 'Document')) {
            const mock = mocker.mockService(DocumentMock);
            providers.push({ provide: 'Document', useValue: mock });
            mockMapper.addExplicit(Document, mock);
        }

        if (!providers.find(p => p.provide === 'Location')) {
            const mock = mocker.mockService(LocationMock);
            providers.push({ provide: 'Location', useValue: mock });
            mockMapper.addExplicit(Location, mock);
        }

        if (!providers.find(p => p.provide === 'Window')) {
            const mock = mocker.mockService(WindowMock);
            providers.push({ provide: 'Window', useValue: mock });
            mockMapper.addExplicit(Window, mock);
        }

        if (getTestBed().platform == null) {
            await TestBed.initTestEnvironment(
                BrowserDynamicTestingModule,
                platformBrowserDynamicTesting()
            );
        }

        await TestBed.resetTestingModule();

        await TestBed.configureTestingModule({
            declarations,
            imports,
            providers
        }).compileComponents();

        // prevent Angular from resetting testing module
        this.resetTestingModule = TestBed.resetTestingModule;
        TestBed.resetTestingModule = () => TestBed;
    }

    protected override async disposeTests() {
        TestBed.resetTestingModule = this.resetTestingModule;
    }
}
