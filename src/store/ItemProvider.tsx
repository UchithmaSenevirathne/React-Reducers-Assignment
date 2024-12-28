import {createContext, useReducer, useState} from "react";
import {initialState, ItemReducer} from "../reducers/ItemReducer.ts";

export const ItemContext = createContext();

export function ItemProvider({children}) {
    const [items, item_dispatch] = useReducer(ItemReducer, initialState);
    return (
        <>
            <ItemContext.Provider value={[items, item_dispatch]}>
                {children}
            </ItemContext.Provider>
        </>
    );
}