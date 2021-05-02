import { SUPPLIES_KEY } from '../constants';
import { Supply } from '../reducers/SupplyReducer';

export const getSuppliesFromLocalStorage = (): Supply[] => JSON.parse(localStorage.getItem(SUPPLIES_KEY) ?? '[]');

export const setSuppliesInLocalStorage = (supplies: Supply[]): void =>
    localStorage.setItem(SUPPLIES_KEY, JSON.stringify(supplies));
