import { type PackageMetadata } from '@/utils/packages/packages.js';
export const frontendPackages = ['ui5', 'react'] as const;
export type FrontendPackageDefaultsMap = (typeof frontendPackages)[number];
export type AvailableFrontendPackagesMap = {
    [packages in FrontendPackageDefaultsMap]: PackageMetadata;
};

export const defaultFrontendPackage: Pick<AvailableFrontendPackagesMap, 'ui5'> =
    {
        ui5: {
            className: 'UI5Package',
            packageName: 'ui5',
            displayName: 'SAPUI5/OpenUI5',
            type: 'frontend',
            metadata: {
                name: {
                    name: 'name',
                    type: 'input',
                    message: 'Specify the ui5 package name?',
                    value: 'ui5project',
                },
                namespace: {
                    name: 'namespace',
                    type: 'input',
                    message: 'Specify the ui5 package namespace?',
                    value: 'com.sap',
                },
            },
        },
    };

export const availableFrontendPackages: AvailableFrontendPackagesMap = {
    ui5: defaultFrontendPackage.ui5,
    react: {
        className: 'ReactPackage',
        packageName: 'react',
        displayName: 'React',
        type: 'frontend',
        metadata: {
            name: {
                name: 'name',
                type: 'input',
                message: 'Specify the react package name?',
                value: 'reactproject',
            },
        },
    },
};
