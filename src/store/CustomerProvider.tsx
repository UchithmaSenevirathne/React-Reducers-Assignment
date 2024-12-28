import {createContext, useReducer, useState} from "react";
import {CustomerReducer, initialState} from "../reducers/CustomerReducer.ts";

export const CustomerContext = createContext();

export function CustomerProvider({children}) {
    const [customers, customer_dispatch] = useReducer(CustomerReducer, initialState);
    return (
        <>
        <CustomerContext.Provider value={[customers, customer_dispatch]}>
            {children}
        </CustomerContext.Provider></>
    );
}