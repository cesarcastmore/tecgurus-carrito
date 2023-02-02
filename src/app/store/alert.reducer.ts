import {createReducer, on} from '@ngrx/store';
import * as identifiers from './alert.constans';
import * as actions from './alert.actions';
import { stagger } from '@angular/animations';

export interface AlertState {
    message: string;
    types: string;
    isOpen:boolean;
}

export const initialState: AlertState= {
    message: '',
    types: '',
    isOpen: false
}

export const alertReducer = createReducer(
    initialState, 
    on(actions.openAlert, (state, {message, types})=> {
        return {...state, isOpen: true, message, types}
    }), 
    on(actions.closeAlert, (state)=> {
        return {...stagger, isOpen: false, message: '', types: ''}
    })
)