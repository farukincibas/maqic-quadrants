import { createContext } from 'react';
import { Company, Actions, initialState } from './reducer';


export type ContextState = {
    state: Company[];
    dispatch: React.Dispatch<Actions>;
};



const contextDefaultValues: ContextState = {
    state: initialState,
    dispatch: () => undefined,
};

export const Context = createContext<ContextState>(contextDefaultValues);