import { Action, createStore } from 'redux';
import { RootReducer } from './reducers';
import { States } from './reducers';

export interface RootState {
    dialog: States['dialog'];
    supply: States['supply'];
}

export default createStore<RootState, Action, unknown, unknown>(RootReducer);
