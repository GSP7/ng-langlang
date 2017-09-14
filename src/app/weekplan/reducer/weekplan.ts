import { createSelector } from 'reselect';

import { normalize, schema } from 'normalizr';
import { List, Map, Record, fromJS } from 'immutable';

import { Weekplan, PageInfo } from '../models/weekplan';
import * as WeekplanActions from '../actions/weekplan';

export const UserSchema = new schema.Entity('user');
export const WeekplanSchema = new schema.Entity('weekplans');
export const WeekplanList = new schema.Array(WeekplanSchema);

export const WeekplanRecord = Record({
    id: null,
    taskName: null,
    acceptanceCriteria: null,
    userID: null,
    planResourcePercent: null,
    resourcePercent: null,
    planPercentComplete: null,
    percentComplete: null,
    note: null,
    unCompleteDeclare: null,
    measure: null,
    planProgress: null,
    progress: null,
    startDate: null,
    finishDate: null
});

export enum LoadWeekplanStatus {
    Unload,
    Loading,
    Loaded
}

export interface WeekplansState extends Map<string, any> {
    result: List<string>;
    entities: { weekplans: Map<string, Weekplan> };
    loadStatus: LoadWeekplanStatus;
    pageinfo: PageInfo;
};

const initialState: WeekplansState = fromJS({
    result: [],
    entities: {
        weekplans: {}
    },
    loadStatus: LoadWeekplanStatus.Unload,
    pageinfo: {
        pageSize: 10,
        pageIndex: 1,
        totalRecord: 1
    }
});

export function weekplans (state: WeekplansState = initialState, action: WeekplanActions.Actions) {
    switch (action.type) {
        case WeekplanActions.LOAD_WEEKPLAN:
            return state.set('loadStatus', LoadWeekplanStatus.Loading);
        case WeekplanActions.LOAD_WEEKPLAN_SUCCESS:
            const normalizeWeekplans: any = normalize(action.payload, WeekplanList);
            return state.withMutations(map => {
                map.set('loadStatus', LoadWeekplanStatus.Loaded);
                map.set('result', List(normalizeWeekplans.result));
                normalizeWeekplans.result.forEach((id: string) => {
                    map.setIn(
                        ['entities', 'weekplans', id],
                        new WeekplanRecord(normalizeWeekplans.entities.weekplans[id])
                    );
                });
            });
        case WeekplanActions.ADD_WEEKPLAN_SUCCESS:
            const newWeekplan: Weekplan = action.payload;
            const result: List<string> = state.get('result');
            return state.withMutations((map) => {
                map.set('loadStatus', LoadWeekplanStatus.Loaded);
                map.update('result', list => list.push(action.payload['id']));
                map.updateIn(['entities', 'weekplans'], ws => ws.set(action.payload['id'], new WeekplanRecord(newWeekplan)));
            });
        case WeekplanActions.EDIT_WEEKPLAN_SUCCES:
            return state.withMutations((map) => {
                map.updateIn(['entities', 'weekplans'], ws => ws.set(action.payload['id'], new WeekplanRecord(action.payload)));
            });
        case WeekplanActions.DEL_WEEKPLAN_SUCCESS:
            const ids: string = action.payload;
            const idsArray = ids.split(',');
            return state.withMutations((map) => {
                map.set('loadStatus', LoadWeekplanStatus.Loaded);
                idsArray.forEach(id => {
                    map.deleteIn(['entities', 'weekplans', id])
                       .deleteIn(['result', map.get('result').indexOf(id)])
                });
            });
        case WeekplanActions.ADD_WEEKPLAN_FAIL:
        case WeekplanActions.EDIT_WEEKPLAN_FAIL:
        case WeekplanActions.DEL_WEEKPLAN_FAIL:
            return state;
        default:
            return state;
    }
};

export const getEntities = (state: WeekplansState) => state.entities;

export const getIds = (state: WeekplansState) => state.result;

export const getLoadStatus = (state: WeekplansState) => state.loadStatus;
