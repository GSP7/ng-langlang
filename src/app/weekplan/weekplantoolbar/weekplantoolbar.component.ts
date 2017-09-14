import { Component, ViewChild, ViewChildren, EventEmitter, OnInit, Input, Output, QueryList } from '@angular/core';
import { Router } from '@angular/router';

import { UUID } from 'angular2-uuid';

import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import { CheckboxdirectiveDirective } from '../directive/checkboxdirective.directive';

import { WeekplansState } from '../reducer/weekplan';

@Component({
  selector: 'app-weekplantoolbar',
  templateUrl: './weekplantoolbar.component.html',
  styleUrls: ['./weekplantoolbar.component.css']
})
export class WeekplantoolbarComponent implements OnInit {
  btn_Add_Mouseover = false;
  btn_Edit_Mouseover = false;
  btn_Del_Mouseover = false;
  @Input() weekplans: Map<string, WeekplansState>;
  @Output() Delete = new EventEmitter();
  @Output() ShowMessage = new EventEmitter();
  @Input() infoModal: ModalDirective;
  @Input() checkboxlist: QueryList<CheckboxdirectiveDirective>;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleCreate(weekplan: any) {
    this.routeWeekplanForm(null);
  }

  handleEdit() {
    let index = 0, id = '';
    if (!this.checkboxlist) {
      this.initMessage('信息', '请选择一个计划，并且最多只能选择一个计划进行编辑！');
      return;
    }
    this.checkboxlist.map((item: CheckboxdirectiveDirective) => {
      if (item.checkboxEl.checked) {
        id = item.getId;
        index++;
      }
    });
    if (index !== 1) {
        this.initMessage('信息', '请选择一个用户，并且最多只能选择一个用户进行编辑！');
        return;
    }
    const weekplan = {
      id: this.weekplans.get('weekplans').get(id).id,
      taskName: this.weekplans.get('weekplans').get(id).taskName,
      acceptanceCriteria: this.weekplans.get('weekplans').get(id).acceptanceCriteria,
      userID: this.weekplans.get('weekplans').get(id).userID,
      planResourcePercent: this.weekplans.get('weekplans').get(id).planResourcePercent,
      resourcePercent: this.weekplans.get('weekplans').get(id).resourcePercent,
      planPercentComplete: this.weekplans.get('weekplans').get(id).planPercentComplete,
      percentComplete: this.weekplans.get('weekplans').get(id).percentComplete,
      note: this.weekplans.get('weekplans').get(id).note,
      unCompleteDeclare: this.weekplans.get('weekplans').get(id).unCompleteDeclare,
      measure: this.weekplans.get('weekplans').get(id).measure,
      planProgress: this.weekplans.get('weekplans').get(id).planProgress,
      progress: this.weekplans.get('weekplans').get(id).progress,
      startDate: this.weekplans.get('weekplans').get(id).startDate,
      finishDate: this.weekplans.get('weekplans').get(id).finishDate,
    };
    this.routeWeekplanForm(JSON.stringify(weekplan));
  }

  handleDel() {
    let index = 0;
    const ids: string[] = [];
    if (!this.checkboxlist) {
      this.initMessage('信息', '请选择至少选择一个用户进行删除！');
      return;
    }
    this.checkboxlist.map((item: CheckboxdirectiveDirective) => {
      if (item.checkboxEl.checked) {
        index++;
        ids.push(item.getId);
      }
    });
    if (index <= 0) {
        this.initMessage('信息', '请选择至少选择一个用户进行删除！');
        return;
    }
    this.Delete.emit(ids.join(','));
  }

  handleAddMouseout() {
    this.btn_Add_Mouseover = !this.btn_Add_Mouseover;
  }

  handleEditMouseout() {
    this.btn_Edit_Mouseover = !this.btn_Edit_Mouseover;
  }

  handleDelMouseout() {
    this.btn_Del_Mouseover = !this.btn_Del_Mouseover;
  }

  routeWeekplanForm(weekplan: string) {
    this.router.navigate(['/weekplan/weekplanform/' + weekplan]);
  }

  initMessage(title: string, message: string) {
    this.ShowMessage.emit({ title: title, message: message });
    this.infoModal.show();
  }
}
