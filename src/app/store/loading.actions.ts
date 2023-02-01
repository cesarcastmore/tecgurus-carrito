import { createAction } from '@ngrx/store';
import * as constants from './loading.constants'

export const openLoading= createAction(constants.OPEN_LOADING)
export const closeLoading= createAction(constants.CLOSE_LOADING)