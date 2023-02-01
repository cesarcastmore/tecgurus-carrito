import { createReducer, on } from '@ngrx/store';
import * as actions from './alert.actions'
import * as types from './alert.constants'


export interface AlertState{
    open: boolean;
    message: string;
    tipo: string;
    
}


export const initialState: AlertState= {
    open: false, 
    message: '',
    tipo: ''
}

export const alertReducer= createReducer(
    initialState,
    on(actions.closeAlert, (state)=> {
        return {...state, message: '', open: false, tipo: ''};
    }), 
    on(actions.openAlert, (state, {message, tipo})=> {
        return {...state, message: message, tipo: tipo};
    })
)