import { Theme } from '@material-ui/core';
import { grayColor, primaryColor, whiteColor, blackColor, hexToRgb } from '../../Colors';

export const ButtonStyle = (theme: Theme) =>
    ({
        button: {
            backgroundColor: grayColor[0],
            color: whiteColor,
            boxShadow:
                '0 2px 2px 0 rgba(' +
                hexToRgb(grayColor[0]) +
                ', 0.14), 0 3px 1px -2px rgba(' +
                hexToRgb(grayColor[0]) +
                ', 0.2), 0 1px 5px 0 rgba(' +
                hexToRgb(grayColor[0]) +
                ', 0.12)',
            padding: theme.spacing(3, 8),
            fontWeight: 400,
            textTransform: 'uppercase',
            willChange: 'box-shadow, transform',
            transition:
                'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            letterSpacing: 0,
            touchAction: 'manipulation',
            '&:hover,&:focus': {
                color: whiteColor,
                backgroundColor: grayColor[0],
                boxShadow:
                    '0 14px 26px -12px rgba(' +
                    hexToRgb(grayColor[0]) +
                    ', 0.42), 0 4px 23px 0px rgba(' +
                    hexToRgb(blackColor) +
                    ', 0.12), 0 8px 10px -5px rgba(' +
                    hexToRgb(grayColor[0]) +
                    ', 0.2)',
            },
        },
        primary: {
            backgroundColor: primaryColor.main,
            boxShadow:
                '0 2px 2px 0 rgba(' +
                hexToRgb(primaryColor.main) +
                ', 0.14), 0 3px 1px -2px rgba(' +
                hexToRgb(primaryColor.main) +
                ', 0.2), 0 1px 5px 0 rgba(' +
                hexToRgb(primaryColor.main) +
                ', 0.12)',
            '&:hover,&:focus': {
                backgroundColor: primaryColor.main,
                boxShadow:
                    '0 14px 26px -12px rgba(' +
                    hexToRgb(primaryColor.main) +
                    ', 0.42), 0 4px 23px 0px rgba(' +
                    hexToRgb(blackColor) +
                    ', 0.12), 0 8px 10px -5px rgba(' +
                    hexToRgb(primaryColor.main) +
                    ', 0.2)',
            },
        },
        transparent: {
            '&,&:focus,&:hover': {
                color: 'inherit',
                background: 'transparent',
                boxShadow: 'none',
            },
        },
        disabled: {
            opacity: '0.65',
            pointerEvents: 'none',
        },
        round: {
            borderRadius: '30px',
        },
    } as const);
