import {
    type UserInputMetadataConfirm,
    type UserInputMetadataList,
} from '../boilerplate/user-input';

export const availableOverrideChoices: UserInputMetadataList = {
    name: {
        name: 'default',
        alt: '',
    },
    description: 'Ask user to override directory',
    isArgument: false,
    message:
        'Project with the same name exists. Please choose an option to proceed?',
    type: 'list',
    value: '',
    list: [
        {
            name: 'Abort project generation?',
            value: 'abort',
            short: 'Abort',
        },
        {
            name: 'Clear the project directory & proceed?',
            value: 'clear',
            short: 'Clear',
        },
    ],
};

export const sureConfirm: UserInputMetadataConfirm = {
    name: {
        name: 'default',
        alt: '',
    },
    description: 'Sure you want to proceed?',
    isArgument: false,
    type: 'confirm',
    confirm: false,
    message: 'Are you sure?',
};
