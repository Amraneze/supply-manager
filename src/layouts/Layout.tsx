import { ReactElement, ReactNode } from 'react';
import { Grid } from '@material-ui/core';

interface Props {
    children: ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
    return (
        <Grid container wrap="nowrap">
            {children}
        </Grid>
    );
}
