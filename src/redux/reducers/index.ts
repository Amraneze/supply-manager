import {
    Reducer,
    Action,
    CombinedState,
    combineReducers,
    StateFromReducersMapObject,
    ActionFromReducersMapObject,
} from 'redux';
import DialogReducer, { State as DialogState } from './DialogReducer';
import SupplyReducer, { State as SupplyState } from './SupplyReducer';

type Reducers = {
    dialog: Reducer<DialogState>;
    supply: Reducer<SupplyState>;
};

export type States = {
    dialog: DialogState;
    supply: SupplyState;
};

const appReducers: Reducer<
    CombinedState<StateFromReducersMapObject<Reducers>>,
    ActionFromReducersMapObject<Reducers>
> = combineReducers<States, Action>({
    dialog: DialogReducer,
    supply: SupplyReducer,
});

export const RootReducer: Reducer<
    CombinedState<StateFromReducersMapObject<Reducers>>,
    ActionFromReducersMapObject<Reducers>
> = (state: States | undefined, action: Action<string>) =>
    appReducers(action.type === 'RESET_STATE' ? undefined : state, action);
