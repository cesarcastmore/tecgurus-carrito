import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { Product } from "../models/product";
import * as actions from './product.actions';

export interface ProductsState {
    items: Product[];
    message: string;
    success: boolean;
    loading: boolean;
}

export const initialState: ProductsState= {
    items: [],
    message: '',
    success: false,
    loading: false
}

export const productReducer = createReducer(
    initialState,
    on(actions.loading_product,(state)=> {
        return {...state, loading: true}
    } ),
    on(actions.loaded_products, (state, {message, items, success})=> {
        return {...state, message, items, success, loading: false}
    })
)