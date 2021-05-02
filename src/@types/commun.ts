import { CSSProperties } from 'react';

export enum Color {
    Primary = 'primary',
    Transparent = 'transparent',
}

export enum Size {
    Meduim = 'sm',
    Large = 'lg',
}

export type ReduxActionType = {
    type: string;
};

export interface StylesDictionary {
    [Key: string]: CSSProperties;
}
