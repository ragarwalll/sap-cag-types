import {
    type UserInputMetadataConfirm,
    type UserInputMetadataInput,
    type UserInputMetadataOptions,
} from '@/boilerplate/user-input.js';

import { GITHUB_LOCATION, PACKAGE_NAME } from '@/utils/packages/packages.js';
export const APP_NAME = 'sap-ts-app';
export const AFTER_ALL = {
    value: 'afterAll',
    description: [
        'Generate awesome boliterplate with',
        `@${PACKAGE_NAME}.`,
        'Contribute at',
        GITHUB_LOCATION,
    ],
};

export const flags = [
    'name',
    'noGit',
    'noInstall',
    'default',
    'version',
    'enableXSUAA',
    'enableCloudMTASupport',
] as const;
export type AvailableFlagsType = (typeof flags)[number];
export type AvailableFlagsMap = {
    [flags in AvailableFlagsType]: UserInputMetadataOptions;
};

export const availableFlags: AvailableFlagsMap = {
    name: {
        name: {
            name: 'name',
            alt: '',
        },
        description: 'The name of the application and the directory name',
        isArgument: true,
        message: 'Specify the project name.',
        type: 'input',
        input: APP_NAME,
    } as UserInputMetadataInput,
    version: {
        name: {
            name: 'version',
            alt: 'v',
        },
        description: 'Specify the version of the project',
        isArgument: false,
        message: '',
        type: 'input',
        input: '0.0.1',
    } as UserInputMetadataInput,
    noGit: {
        name: {
            name: 'noGit',
            alt: 'ng',
        },
        description:
            'Tell the CLI not to initialize the app as a GIT repository',
        isArgument: false,
        message: 'Initialize new Git repository?',
        type: 'confirm',
        confirm: false,
    } as UserInputMetadataConfirm,
    noInstall: {
        name: {
            name: 'noInstall',
            alt: 'ni',
        },
        description: 'Tell the CLI to skip installing the dependencies',
        isArgument: false,
        message: 'Would you like skip installing all the dependencies?',
        type: 'confirm',
        confirm: false,
    } as UserInputMetadataConfirm,
    default: {
        name: {
            name: 'default',
            alt: 'y',
        },
        description: 'Tell the CLI to bypass & use the default options',
        isArgument: false,
        message: 'Would you like to continue with default options?',
        type: 'confirm',
        confirm: false,
    } as UserInputMetadataConfirm,
    enableXSUAA: {
        name: {
            name: 'enableXSUAA',
            alt: 'ex',
        },
        description: 'Enable XSUAA Support',
        isArgument: false,
        message: 'Enable XSUAA Support?',
        type: 'confirm',
        confirm: true,
    } as UserInputMetadataConfirm,
    enableCloudMTASupport: {
        name: {
            name: 'enableCloudMTASupport',
            alt: 'mta',
        },
        description: 'Enable MTA deployment support for SAP BTP',
        isArgument: false,
        message: 'Enable MTA deployment support for SAP BTP?',
        type: 'confirm',
        confirm: true,
    } as UserInputMetadataConfirm,
};

export interface ChoiceOps {
    value: string;
    name: string;
    short: string;
}
