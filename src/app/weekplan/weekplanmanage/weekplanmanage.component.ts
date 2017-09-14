import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { List, Map } from 'immutable';

// Store
import { Store } from '@ngrx/store';
// Reducer
import * as RootReducer from '../../reducer/index';
import * as WeekplanReducer from '../reducer/weekplan';
// Weekplan Actions
import * as WeekplanActions from '../actions/weekplan';

import { WeekplancardComponent } from '../weekplancard/weekplancard.component';

@Component({
  selector: 'app-weekplanmanage',
  templateUrl: './weekplanmanage.component.html',
  styleUrls: ['./weekplanmanage.component.css']
})
export class WeekplanmanageComponent implements OnInit {
  loadStatus: Map<string, string>;
  weekplans: Map<string, WeekplanReducer.WeekplansState>;
  result: List<string>;

  constructor(private store: Store<RootReducer.AppState>, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      if (params['status'] === 'first') {
        this.store.dispatch(new WeekplanActions.LoadWeekplanAction());
      }
    });
    const weekplanStore = this.store.select<WeekplanReducer.WeekplansState>('weekplans').subscribe((value) => {
      this.loadStatus = value.get('loadStatus');
      this.result = value.get('result');
      this.weekplans = value.get('entities');
    });
  }

  ngOnInit() {
  }

  handleDelete(ids: string) {
    this.store.dispatch(new WeekplanActions.DelWeekplanAction(ids));
  }

}
