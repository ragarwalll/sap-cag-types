import {
    type ChoiceOps,
    type AvailableFlagsType,
} from '@/utils/boilerplate-flags.js';

export interface UserInputMetadata {
    name: string;
    type: UserInputMetadataTypes;
    message: string;
    value: string;
}

export interface FlagsNames {
    name: AvailableFlagsType;
    alt: string;
}

export interface UserInputMetadataOptions
    extends Omit<UserInputMetadata, 'value' | 'name'> {
    description: string;
    isArgument: boolean;
    name: FlagsNames;
}

export interface UserInputMetadataInput extends UserInputMetadataOptions {
    input: string;
}

export interface UserInputMetadataConfirm extends UserInputMetadataOptions {
    confirm: boolean;
}

export interface UserInputMetadataList extends UserInputMetadataOptions {
    value: string;
    list: ChoiceOps[];
}

export const userInputMetadata = ['input', 'confirm', 'list'] as const;
export type UserInputMetadataTypes = (typeof userInputMetadata)[number];
