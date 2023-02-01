import { createAction, props } from '@ngrx/store';
import * as types from './alert.constants'

export const openAlert=createAction(types.OPEN_ALERT, props<{message: string; tipo: string;}>())

export const closeAlert= createAction(types.CLOSE_ALERT)