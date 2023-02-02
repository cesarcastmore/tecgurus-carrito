import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map } from 'rxjs';
import * as types from './alert.constants';
@Injectable()
export class AlertEffects {

    closeAlert$= createEffect(()=> 
        this.actions$.pipe(
            ofType(types.OPEN_ALERT),
            delay(2000), 
            map(state=> {
                return { type: types.CLOSE_ALERT}
            })
        )
    )


    constructor(private actions$: Actions){

    }


}