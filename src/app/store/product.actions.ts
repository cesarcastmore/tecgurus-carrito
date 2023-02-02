import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product';
import * as identifiers from './products.constans';


export const loading_product = createAction(identifiers.LOADING_PRODUCTS);
export const loaded_products = createAction(identifiers.LOADED_PRODUCTS, 
    props<{items: Product[]; success: boolean; message: string;}>());  
