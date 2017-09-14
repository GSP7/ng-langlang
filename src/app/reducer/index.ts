import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as weekplanReducer from '../weekplan/reducer/weekplan';

export interface AppState {
    weekplans: weekplanReducer.WeekplansState;
    router: fromRouter.RouterState;
}

export const rootReducer = {
    weekplans: weekplanReducer.weekplans,
    router: fromRouter.routerReducer,
};

export const getWeekplanState = (state: AppState) => state.weekplans;

export const getWeekplanEntities = createSelector(getWeekplanState, weekplanReducer.getEntities);

export const getWeekplanIds = createSelector(getWeekplanState, weekplanReducer.getIds);

export const getLoadStatus = createSelector(getWeekplanState, weekplanReducer.getLoadStatus);
