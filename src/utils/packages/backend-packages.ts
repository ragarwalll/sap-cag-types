import { type PackageMetadata } from '@/utils/packages/packages.js';
export const backendPackages = ['springboot', 'nodejs', 'python'] as const;
export type BackendPackageDefaultsMap = (typeof backendPackages)[number];
export type AvailableBackendPackagesMap = {
    [packages in BackendPackageDefaultsMap]: PackageMetadata;
};

export const defaultBackendPackage: Pick<
    AvailableBackendPackagesMap,
    'springboot'
> = {
    springboot: {
        className: 'SpringBootPackage',
        packageName: 'springboot',
        displayName: 'Spring Boot',
        type: 'backend',
        metadata: {
            name: {
                name: 'name',
                type: 'input',
                message: 'Specify the spring boot package name?',
                value: 'springbootproject',
            },
            namespace: {
                name: 'namespace',
                type: 'input',
                message: 'Specify the spring boot package namespace?',
                value: 'com.sap',
            },
        },
    },
};

export const availableBackendPackages: AvailableBackendPackagesMap = {
    springboot: defaultBackendPackage.springboot,
    nodejs: {
        className: 'NodeJSPackage',
        packageName: 'nodejs',
        displayName: 'Node JS',
        type: 'backend',
        metadata: {
            name: {
                name: 'name',
                type: 'input',
                message: 'Specify the nodejs package name?',
                value: 'nodejsproject',
            },
        },
    },
    python: {
        className: 'PythonPackage',
        packageName: 'python',
        displayName: 'Python',
        type: 'backend',
        metadata: {
            name: {
                name: 'name',
                type: 'input',
                message: 'Specify the python package name?',
                value: 'pythonproject',
            },
        },
    },
};
