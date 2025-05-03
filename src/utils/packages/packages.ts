import { type UserInputMetadata } from '../../boilerplate/user-input';
import { type backendPackages } from './backend-packages';
import { type frontendPackages } from './frontend-packages';

export const PACKAGE_NAME = 'create-sap-fs-app';
export const PACKAGE_DESCRIPTION =
    'A CLI for creating SAP full stack applications';
export const GITHUB_LOCATION =
    'https://github.com/ragarwalll/sap-cloud-application-generator';
export interface PackageMetadata {
    readonly type: PackageType;
    readonly displayName: string;
    metadata: Record<string, UserInputMetadata>;
    className: string;
    packageName: AvailablePackagesType;
}

export type AvailablePackagesType =
    | (typeof frontendPackages)[number]
    | (typeof backendPackages)[number];

export type AvailablePackagesMap = {
    [packages in AvailablePackagesType]: PackageMetadata;
};

export const SkipPackageData: PackageMetadata = {
    displayName: 'Skip',
    packageName: 'python',
    type: 'unknown',
    metadata: {},
    className: '',
};

export interface GeneratePackageTemplateArgs {
    packageName: AvailablePackagesType | 'approuter' | 'deployer';
    packageType: PackageType;
    packageRoot: string;
}

export const packageType = ['frontend', 'backend', 'unknown'] as const;
export type PackageType = (typeof packageType)[number];
