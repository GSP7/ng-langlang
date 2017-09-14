import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import * as WeekplanActions from '../actions/weekplan';
import { WeekplanserviceService } from '../services/weekplanservice.service';

@Injectable()
export class WeekplanEffects {
    @Effect()
    loadWeekplans$: Observable<Action> = this.actions$
        .ofType(WeekplanActions.LOAD_WEEKPLAN)
        .startWith(new WeekplanActions.LoadWeekplanAction())
        .switchMap(() => this.weekplanService.loadWeekplan('1')
            .map(weekplans => new WeekplanActions.LoadWeekplanSuccessAction(weekplans))
            .catch(error => of(new WeekplanActions.LoadWeekplanFailAction(error)))
        );
    @Effect()
    addWeekplan$: Observable<Action> = this.actions$
        .ofType(WeekplanActions.ADD_WEEKPLAN)
        .map((action: WeekplanActions.AddWeekplanAction) => action.payload)
        .mergeMap(weekplan =>
            this.weekplanService.createWeekplan(weekplan)
                .map(() => new WeekplanActions.AddWeekplanSuccessAction(weekplan))
                .catch(() => of(new WeekplanActions.AddWeekplanFailAction(weekplan)))
        );
    @Effect()
    editWeekplan$: Observable<Action> = this.actions$
        .ofType(WeekplanActions.EDIT_WEEKPLAN)
        .map((action: WeekplanActions.EditWeekplanAction) => action.payload)
        .mergeMap(weekplan =>
            this.weekplanService.updateWeekplan(weekplan)
                .map(() => new WeekplanActions.EditWeekplanSuccessAction(weekplan))
                .catch(() => of(new WeekplanActions.EditWeekplanFailAction(weekplan)))
        );
    @Effect()
    delWeekplan$: Observable<Action> = this.actions$
        .ofType(WeekplanActions.DEL_WEEKPLAN)
        .map((action: WeekplanActions.DelWeekplanAction) => action.payload)
        .mergeMap(ids =>
            this.weekplanService.deleteWeekplan(ids)
                .map(() => new WeekplanActions.DelWeekplanSuccessAction(ids))
                .catch(() => of(new WeekplanActions.DelWeekplanFailAction(ids)))
        );

    constructor(private actions$: Actions, private weekplanService: WeekplanserviceService) { }
}
