import { ReactElement } from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { Tabs } from '@components';
import { HomeStyles } from '@styles';

const useStyles = makeStyles<Theme>(HomeStyles);

export default function Home(): ReactElement {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Tabs />
        </div>
    );
}
