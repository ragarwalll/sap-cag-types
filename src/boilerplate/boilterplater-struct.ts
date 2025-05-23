import { type AvailablePackagesMap } from '../utils/packages/packages';
import { APP_NAME } from '../utils/boilerplate-flags';
import { defaultFrontendPackage } from '../utils/packages/frontend-packages';
import { defaultBackendPackage } from '../utils/packages/backend-packages';

export interface BoilerplateFlags {
    noInstall: boolean;
    noGit: boolean;
    default: boolean;
}

export interface Boilerplate {
    appName: string;
    packages: Partial<AvailablePackagesMap>;
    enableXSUAA: boolean;
    enableCloudMTASupport: boolean;
    flags: BoilerplateFlags;
}

export const boilerplateDefaults: Boilerplate = {
    appName: APP_NAME,
    packages: {
        ui5: defaultFrontendPackage.ui5,
        springboot: defaultBackendPackage.springboot,
    },
    enableXSUAA: true,
    enableCloudMTASupport: true,
    flags: {
        noGit: false,
        noInstall: false,
        default: false,
    },
};
