import { ReduxActionType } from '@types';
import { CHANGE_DIALOG_VISIBILITY } from '../constants/DialogConstants';
import { State } from '../reducers/DialogReducer';

const commonKey = 'common.';
const dialogKey = 'dialog.';

type DialogState = ReduxActionType & State;

const displayDialog = (): DialogState => ({
    type: CHANGE_DIALOG_VISIBILITY,
    show: true,
    props: {
        fullScreen: false,
        open: true,
        isExtended: false,
        isCloseIconDisplayed: false,
        dialog: {
            title: `${dialogKey}errTech`,
            text: `${dialogKey}errTechText`,
            buttons: {
                primary: {
                    text: `${commonKey}ok`,
                },
            },
        },
    },
});

const closeDialog = (): DialogState => ({
    type: CHANGE_DIALOG_VISIBILITY,
    show: false,
    props: {
        open: false,
        fullScreen: false,
        isExtended: false,
        isCloseIconDisplayed: false,
        dialog: {
            text: '',
            title: '',
            buttons: {},
        },
    },
});

export const DialogActions = {
    closeDialog,
    displayDialog,
};
