import {Item} from "../models/Item.ts";

export const initialState : Item[] = [];
export function ItemReducer(state:Item [], action:{type:string, payload:Item}){
    switch(action.type){
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'UPDATE_ITEM':
            return state.map((item: Item) =>
                item.id === action.payload.id ?
                    {...item, item_name : action.payload.item_name, price : action.payload.price, quantity : action.payload.quantity }
                    : item
            );
        case 'DELETE_ITEM':
            return state.slice(0,-1);

    }
}