import { Action } from '@ngrx/store';
import { createSelector } from 'reselect';

import { normalize, schema } from 'normalizr';
import { List, Map, Record, fromJS } from 'immutable';

import { Weekplan, PageInfo } from '../models/weekplan';
import * as WeekplanActions from '../actions/weekplan';

export const UserSchema = new schema.Entity('user');
export const WeekplanSchema = new schema.Entity('weekplans', { user: UserSchema }, { idAttribute: 'ID' });

export const WeekplanRecord = Record({
    ID: null,
    TaskName: null,
    AcceptanceCriteria: null,
    User: {
        ID: null,
        UserName: null
    },
    PlanResourcePercent: null,
    ResourcePercent: null,
    PlanPercentComplete: null,
    PercentComplete: null,
    Note: null,
    UnCompleteDeclare: null,
    Measure: null,
    PlanProgress: null,
    Progress: null
});

export interface Weekplans extends Map<string, any> {
    result: List<string>;
    entities: { weekplans: Map<string, Weekplan> };
    loading: boolean;
};

const initialState: Weekplans = fromJS({
    result: [],
    entities: {
        weekplans: {}
    },
    loading: false
});

export const weekplans = (state = initialState, action: Action) => {
    switch (action.type) {
        case WeekplanActions.LOAD_WEEKPLAN:
            return state.set('loading', true);
        case WeekplanActions.LOAD_WEEKPLAN_SUCCESS:
            const normalizeWeekplans: any = normalize(action.payload, WeekplanSchema);
            return state.withMutations(map => {
                map.set('loading', false);
                map.set('result', List(normalizeWeekplans.result));
                normalizeWeekplans.result.forEach((id: string) => {
                    map.setIn(
                        ['entities', 'weekplans', id],
                        new WeekplanRecord(normalizeWeekplans.entities.weekplans[id])
                    );
                });
            });
        case WeekplanActions.EDIT_WEEKPLAN_FAIL:
        case WeekplanActions.DEL_WEEKPLAN_FAIL:
        case WeekplanActions.ADD_WEEKPLAN_SUCCESS:
            const newWeekplan: Weekplan = action.payload;
            if (state.result.indexOf(newWeekplan.ID) > -1) {
                return state;
            }
            return state.withMutations((map) => {
                map.set('loading', false);
                map.update('result', list => list.push(action.payload['ID']));
                map.updateIn(['entities', 'weekplans'], ws => ws.set(action.payload['ID'], action.payload));
            });
        case WeekplanActions.EDIT_WEEKPLAN_SUCCES:
            return state.withMutations((map) => {
                map.update('entities', (ws) => {
                    ws.withMutations(m => m.update(action.payload['ID'], action.payload));
                });
            });
        case WeekplanActions.ADD_WEEKPLAN_FAIL:
        case WeekplanActions.DEL_WEEKPLAN_SUCCESS:
            const delWeekplan: Weekplan = action.payload;
            return state.withMutations((map) => {
                map.set('loading', false);
                map.deleteIn(['entities', 'weekplans', delWeekplan.ID])
                   .deleteIn(['result', map.get('result').indexOf(delWeekplan.ID)])
            });
        default:
            return state;
    }
};
