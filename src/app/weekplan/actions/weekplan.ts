import { Action } from '@ngrx/store';
import { Weekplan } from '../models/weekplan';

export const LOAD_WEEKPLAN =             '[Weekplan] Load';
export const LOAD_WEEKPLAN_SUCCESS =     '[Weekplan] Load Success';
export const LOAD_WEEKPLAN_FAIL =        '[Weekplan] Load Fail';
export const ADD_WEEKPLAN =              '[Weekplan] Add';
export const ADD_WEEKPLAN_SUCCESS =      '[Weekplan] Add Success';
export const ADD_WEEKPLAN_FAIL =         '[Weekplan] Add Fail';
export const EDIT_WEEKPLAN =             '[Weekplan] Edit';
export const EDIT_WEEKPLAN_SUCCES =      '[Weekplan] Edit Success';
export const EDIT_WEEKPLAN_FAIL =        '[Weekplan] Edit Fail';
export const DEL_WEEKPLAN =              '[Weekplan] Del';
export const DEL_WEEKPLAN_SUCCESS =      '[Weekplan] Del Success';
export const DEL_WEEKPLAN_FAIL =         '[Weekplan] Del Fail';

export class LoadWeekplanAction implements Action {
    readonly type = LOAD_WEEKPLAN;
}

export class LoadWeekplanSuccessAction implements Action {
    readonly type = LOAD_WEEKPLAN_SUCCESS;

    constructor(public payload: Weekplan[]) { }
}

export class LoadWeekplanFailAction implements Action {
    readonly type = LOAD_WEEKPLAN_FAIL;

    constructor(public payload: any) { }
}

export class AddWeekplanAction implements Action {
    readonly type = ADD_WEEKPLAN;

    constructor(public payload: Weekplan) { }
}

export class AddWeekplanSuccessAction implements Action {
    readonly type = ADD_WEEKPLAN_SUCCESS;

    constructor(public payload: Weekplan) { }
}

export class AddWeekplanFailAction implements Action {
    readonly type = ADD_WEEKPLAN_FAIL;

    constructor(public payload: Weekplan) { }
}

export class EditWeekplanAction implements Action {
    readonly type = EDIT_WEEKPLAN;

    constructor(public payload: Weekplan) { }
}

export class EditWeekplanSuccessAction implements Action {
    readonly type = EDIT_WEEKPLAN_SUCCES;

    constructor(public payload: Weekplan) { }
}

export class EditWeekplanFailAction implements Action {
    readonly type = EDIT_WEEKPLAN_FAIL;

    constructor(public payload: Weekplan) { }
}

export class DelWeekplanAction implements Action {
    readonly type = DEL_WEEKPLAN;

    constructor(public payload: string) { }
}

export class DelWeekplanSuccessAction implements Action {
    readonly type = DEL_WEEKPLAN_SUCCESS;

    constructor(public payload: string) { }
}

export class DelWeekplanFailAction implements Action {
    readonly type = DEL_WEEKPLAN_FAIL;

    constructor(public payload: string) { }
}

export type Actions
    = LoadWeekplanAction
    | LoadWeekplanSuccessAction
    | LoadWeekplanFailAction
    | AddWeekplanAction
    | AddWeekplanSuccessAction
    | AddWeekplanFailAction
    | EditWeekplanAction
    | EditWeekplanSuccessAction
    | EditWeekplanFailAction
    | DelWeekplanAction
    | DelWeekplanSuccessAction
    | DelWeekplanFailAction;
