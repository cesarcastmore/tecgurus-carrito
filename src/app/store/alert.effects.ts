import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as indentifiers from './alert.constans';
import { delay, map} from 'rxjs'
 
@Injectable()

export class AlertEffects {

    closeAlert$ = createEffect(()=>
        this.actions.pipe(
            ofType(indentifiers.OPEN_ALERT),
            delay(2000), 
            map(state=> {
                return { type: indentifiers.CLOSE_ALERT}
            })
        )

    )


    constructor(private actions: Actions){

    }


}