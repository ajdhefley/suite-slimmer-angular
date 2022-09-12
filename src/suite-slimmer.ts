import { JasmineMocker } from './jasmine-mocker';
import { JestMocker } from './jest-mocker';
import { MockManager } from './mock-manager';
import { TestFrameworkType } from './test-framework-type';

export abstract class SuiteSlimmer {
    public static use(framework: TestFrameworkType) {
        switch (framework) {
            case 'jasmine':
                return MockManager.setDependencyMocker(new JasmineMocker());
            case 'jest':
                return MockManager.setDependencyMocker(new JestMocker());
        }
    }

    private constructor() {}
}