import { DependencyMocker } from 'suite-slimmer';
import { JestMocker } from './jest-mocker';

export abstract class MockManager {
    private static DependencyMocker: DependencyMocker;

    public static setDependencyMocker(dependencyMocker: DependencyMocker) {
        MockManager.DependencyMocker = dependencyMocker;
    }

    public static getDependencyMocker(): DependencyMocker {
        if (!MockManager.DependencyMocker) {
            // Jest can be zero-config with potentially no chance to bootstrap, use by default
            MockManager.setDependencyMocker(new JestMocker());
        }

        return MockManager.DependencyMocker;
    }

    private constructor() {}
}