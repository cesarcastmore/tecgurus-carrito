import { createReducer, on } from "@ngrx/store";
import * as actions from './loading.actions';


export interface LoadingState {
    isLoading: boolean;
}

export const initialState: LoadingState= {
    isLoading: true
}

export const loadingReducer= createReducer(
    initialState, 
    on(actions.openLoading, (state)=> {
        return {...state, isLoading: true};
    }),
    on(actions.closeLoading, (state)=> {
        return {...state,isLoading: false}
    })
)
