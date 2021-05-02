import { ReactElement } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Color } from '@types';
import { RoutersConstant } from '@routes';
import { ErrorBoundaryStyles } from '@styles';
import { Card, CardBody, Button } from '@components';
import icError from '@assets/img/pages/error/error.svg';

const errorBoundaryTranslationKey = 'errorBounday.';
const useStyles = makeStyles(ErrorBoundaryStyles);

export default function ErrorBoundary(): ReactElement {
    const classes = useStyles();
    const history = useHistory();
    const { t } = useTranslation();
    const redirectToHome = () => history.push(RoutersConstant.home);

    return (
        <div className={classes.root}>
            <Card>
                <CardBody>
                    <img src={icError} className={classes.img} alt="" />
                    <Typography variant="h3" className={classes.title}>
                        {t(`${errorBoundaryTranslationKey}title`)}
                    </Typography>
                    <Typography variant="body1" className={classes.subtitle}>
                        {t(`${errorBoundaryTranslationKey}description`)}
                    </Typography>
                    <Button round color={Color.Primary} onClick={redirectToHome}>
                        {t(`${errorBoundaryTranslationKey}redirectToHome`)}
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
}
