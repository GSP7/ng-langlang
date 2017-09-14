import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, ViewChildren, QueryList, OnInit } from '@angular/core';
import { List, Map } from 'immutable';

import { CheckboxdirectiveDirective } from '../Directive/checkboxdirective.directive';

import * as WeekplanReducer from '../reducer/weekplan';

@Component({
  selector: 'app-weekplanlist',
  templateUrl: './weekplanlist.component.html',
  styleUrls: ['./weekplanlist.component.css']
})
export class WeekplanlistComponent implements OnInit {
  @Input() loadStatus: Map<string, string>;
  @Input() weekplans: Map<string, WeekplanReducer.WeekplansState>;
  @Input() result: List<string>;
  @Output() GetCheckedboxList = new EventEmitter();
  @ViewChild('headCheckbox') headCheckbox: ElementRef;
  @ViewChildren(CheckboxdirectiveDirective) checkboxs: QueryList<CheckboxdirectiveDirective>;

  constructor() { }

  ngOnInit() {
  }

  handleHeadCheckboxs() {
    this.checkboxs.map((item: CheckboxdirectiveDirective) => { item.checkboxEl.checked = this.headCheckbox.nativeElement.checked; });
    this.GetCheckedboxList.emit(this.checkboxs);
  }

  handleItemCheckbox(id) {
    const item: CheckboxdirectiveDirective = this.checkboxs.find((i: CheckboxdirectiveDirective) => i.getId === id);
    this.GetCheckedboxList.emit(this.checkboxs);
  }

}
