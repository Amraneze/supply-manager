import { ChangeEvent, FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useTranslation } from 'react-i18next';
import { Color } from '@types';
import { Button } from '@components';
import { Supply } from '~/redux/reducers/SupplyReducer';

const useStyles = makeStyles((theme) => ({
    buttonContainer: {
        margin: theme.spacing(2, 0),
    },
}));

const tabsTranslationKey = 'tabs.';
const communTranslationKey = 'commun.';

interface Props {
    supply?: Supply;
    isReadOnly?: boolean;
    saveSupply: () => void;
    onChange: (field: string) => (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SupplyPanel: FC<Props> = ({ onChange, saveSupply, supply, isReadOnly = false }) => {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <form noValidate autoComplete="on">
            <Grid container justify="center" spacing={5}>
                <Grid item>
                    <TextField
                        onChange={onChange('name')}
                        label={t(`${tabsTranslationKey}supplierName`)}
                        defaultValue={supply?.name}
                        InputProps={{
                            readOnly: isReadOnly,
                        }}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        type="number"
                        onChange={onChange('price')}
                        label={t(`${tabsTranslationKey}price`)}
                        defaultValue={supply?.price}
                        InputProps={{
                            readOnly: isReadOnly,
                        }}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        type="number"
                        onChange={onChange('amount')}
                        label={t(`${tabsTranslationKey}amountOfMaterials`)}
                        defaultValue={supply?.amount}
                        InputProps={{
                            readOnly: isReadOnly,
                        }}
                    />
                </Grid>
            </Grid>
            {!isReadOnly && (
                <Grid container justify="flex-end" className={classes.buttonContainer}>
                    <Grid item>
                        <Button color={Color.Primary} onClick={saveSupply}>
                            {t(`${communTranslationKey}add`)}
                        </Button>
                    </Grid>
                </Grid>
            )}
        </form>
    );
};
