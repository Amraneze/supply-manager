import { ReduxActionType } from '@types';
import { ADD_SUPPLY, GET_SUPPLIES, REMOVE_SUPPLY } from '../constants/SupplyConstants';
import { Supply } from '../reducers/SupplyReducer';

type SupplyState = Supply & ReduxActionType;

const addSupply = (supply: Supply): SupplyState => ({
    type: ADD_SUPPLY,
    ...supply,
});

const getSupplies = (): ReduxActionType => ({
    type: GET_SUPPLIES,
});

const removeSupply = (name: string): SupplyState => ({
    type: REMOVE_SUPPLY,
    name,
});

export const SupplyActions = {
    addSupply,
    getSupplies,
    removeSupply,
};
