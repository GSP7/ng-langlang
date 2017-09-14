import { Component, ViewChild, Input, Output, EventEmitter, QueryList, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { List, Map } from 'immutable';

import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import { CheckboxdirectiveDirective } from '../directive/checkboxdirective.directive';

import * as WeekplanReducer from '../reducer/weekplan';

import { WeekplanlistComponent } from '../weekplanlist/weekplanlist.component';
import { WeekplantoolbarComponent } from '../weekplantoolbar/weekplantoolbar.component';
import { WeekplanpagingComponent } from '../weekplanpaging/weekplanpaging.component';

@Component({
  selector: 'app-weekplancard',
  templateUrl: './weekplancard.component.html',
  styleUrls: ['./weekplancard.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition('* => void', [
        animate('0.2s ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class WeekplancardComponent implements OnInit {
  @Input() loadStatus: Map<string, string>;
  @Input() weekplans: Map<string, WeekplanReducer.WeekplansState>;
  @Input() result: List<string>;
  @Output() Delete = new EventEmitter();
  @ViewChild('infoModal') infoModal: ModalDirective;
  message = {
    title: '',
    message: ''
  };
  checkboxlist: QueryList<CheckboxdirectiveDirective>;

  constructor() { }

  ngOnInit() {
  }

  handleMessageAlert(msg: any) {
    this.message = msg;
  }

  handleCheckboxList(checkboxlist: QueryList<CheckboxdirectiveDirective>) {
    this.checkboxlist = checkboxlist;
  }

  handleDelete(ids: string) {
    this.Delete.emit(ids);
  }
}
