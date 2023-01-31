import { createAction } from '@ngrx/store';
import * as loading from './loading.constant'

export const openLoading = createAction(loading.OPEN_LOADING);
export const closeLoading = createAction(loading.CLOSE_LOADING)
