import Immutable, { Map } from 'immutable';
import { Reducer } from 'redux';
import { createReducer } from 'redux-immutablejs';
import { ADD_SUPPLY, GET_SUPPLIES, REMOVE_SUPPLY } from '../constants';
import { getSuppliesFromLocalStorage, setSuppliesInLocalStorage } from '../utils/suppliesManager';

export type State = {
    supplies: Supply[];
};

export type Supply = {
    name: string;
    amount?: number;
    price?: number;
};

const initialState: State = {
    supplies: getSuppliesFromLocalStorage(),
};

const reducer: Reducer<State> = createReducer(Immutable.fromJS(initialState), {
    [ADD_SUPPLY]: (state: Map<string, State>, supply: Supply) => {
        const supplies = [...(state.toJS() as State).supplies, supply];
        setSuppliesInLocalStorage(supplies);
        return state.merge<State>(
            Immutable.fromJS({
                supplies,
            })
        );
    },
    [GET_SUPPLIES]: (state: Map<string, State>) =>
        state.merge<State>(
            Immutable.fromJS({
                supplies: getSuppliesFromLocalStorage(),
            })
        ),
    [REMOVE_SUPPLY]: (state: Map<string, State>, name: string) =>
        state.merge<State>(
            Immutable.fromJS({
                supplies: (state.toJS() as State).supplies?.filter((supply: Supply) => supply.name !== name),
            })
        ),
});

export default reducer;
