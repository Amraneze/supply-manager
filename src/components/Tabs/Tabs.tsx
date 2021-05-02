import { ChangeEvent, useState, useEffect, FC } from 'react';
import { Map } from 'immutable';
import { bindActionCreators, Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TabsMui from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddIcon from '@material-ui/icons/Add';
import { SupplyPanel } from '@components';
import { isEmpty } from '@utils';
import TabPanel from './TabPanel';
import { State as SupplyState, Supply } from '~/redux/reducers/SupplyReducer';
import { SupplyActions } from '~/redux/actions';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

const mapStateToProps = ({ supply }: { supply: Map<string, SupplyState> }): SupplyState => {
    const { supplies } = supply.toJS() as SupplyState;
    return {
        supplies,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            addSupply: SupplyActions.addSupply,
        },
        dispatch
    );

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

type OwnProps = {
    addSupply: (supply: Supply) => void;
};

type Props = PropsFromRedux & OwnProps;

const defaultSupply = { name: '', amount: 0, price: 0 };

const Tabs: FC<Props> = ({ supplies, addSupply }) => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [supply, setSupply] = useState<Supply>(defaultSupply);
    const [displayNewPanel, setDisplayNewPanel] = useState(false);

    useEffect(() => {
        setDisplayNewPanel(isEmpty(supplies));
        setSupply(defaultSupply);
    }, [supplies]);

    const handleChange = (_: ChangeEvent<Record<string, unknown>>, newValue: number) => setValue(newValue);

    const addNewSupplyPanel = () => {
        setDisplayNewPanel(true);
    };

    const onFieldChanged = (field: string) => ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) =>
        setSupply((prevState) => ({
            ...prevState,
            [field]: value,
        }));

    const saveSupply = () => {
        // TODO: Check if all fields are valid
        addSupply(supply);
    };

    return (
        <div className={classes.root}>
            <AppBar color="primary" position="static">
                <TabsMui variant="fullWidth" value={value} onChange={handleChange}>
                    {supplies.map((supply) => (
                        <Tab key={`${supply.name}`} label={supply.name} />
                    ))}
                    <Tab icon={<AddIcon />} onClick={addNewSupplyPanel} />
                </TabsMui>
            </AppBar>
            {supplies.map((supply, index) => (
                <TabPanel key={supply.name} value={value} index={index}>
                    <SupplyPanel isReadOnly supply={supply} onChange={onFieldChanged} saveSupply={saveSupply} />
                </TabPanel>
            ))}
            {displayNewPanel && (
                <TabPanel value={value} index={supplies.length}>
                    <SupplyPanel supply={supply} onChange={onFieldChanged} saveSupply={saveSupply} />
                </TabPanel>
            )}
        </div>
    );
};

export default connector(Tabs);
