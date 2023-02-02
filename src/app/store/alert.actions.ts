import { createAction, props } from '@ngrx/store';
import * as identifiers from './alert.constans';

export const openAlert = createAction(identifiers.OPEN_ALERT, props<{ message: string; types: string; }>());
export const closeAlert = createAction(identifiers.CLOSE_ALERT)


