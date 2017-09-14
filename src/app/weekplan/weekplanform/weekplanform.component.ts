import { Component, ViewChild, Output, Input, EventEmitter, OnInit, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Record } from 'immutable';
import { UUID } from 'angular2-uuid';

// Store
import { Store } from '@ngrx/store';
import { WeekplansState, WeekplanRecord } from '../reducer/weekplan';
import * as WeekplanActions from '../actions/weekplan';

// Service
import { DatetoolsService } from '../../services/datetools.service';

// Validator
import { numberValidator } from '../../validator/numbervalidator';

// datepicker
import { NgDateRangePickerOptions, NgDateRangePickerComponent } from 'ng-daterangepicker';

// models
import { Weekplan } from '../models/weekplan';

@Component({
  selector: 'app-weekplanform',
  templateUrl: './weekplanform.component.html',
  styleUrls: ['./weekplanform.component.css'],
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
export class WeekplanformComponent implements OnInit, AfterContentInit {
  myForm: FormGroup;
  @ViewChild(NgDateRangePickerComponent) datePicker: NgDateRangePickerComponent;
  options: NgDateRangePickerOptions;
  btn_Save_mouseover = false;
  btn_SaveAndClose_mouseover = false;
  btn_Cancel_mouseover = false;

constructor(private fb: FormBuilder, private router: Router,
            private dateService: DatetoolsService, private store: Store<WeekplansState>,
            private route: ActivatedRoute) {
    this.options = {
      theme: 'default',
      range: 'tw',
      dayNames: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      presetNames: ['This Month', 'Last Month', 'This Week', 'Last Week', 'This Year', 'Last Year', 'Start', 'End'],
      dateFormat: 'yMd',
      outputFormat: 'YYYY/MM/DD',
      startOfWeek: 1
    };
    this.myForm = this.fb.group({
      'id': '',
      'taskName': ['', Validators.required],
      'userID': '',
      'acceptanceCriteria': [''],
      'planResourcePercent': [0, Validators.compose([Validators.required, Validators.min(0), Validators.max(100), numberValidator])],
      'resourcePercent': [0, Validators.compose([Validators.required, Validators.min(0), Validators.max(100), numberValidator])],
      'planPercentComplete': [0, Validators.compose([Validators.required, Validators.min(0), Validators.max(100), numberValidator])],
      'percentComplete': [0, Validators.compose([Validators.required, Validators.min(0), Validators.max(100), numberValidator])],
      'note': [''],
      'unCompleteDeclare': [''],
      'measure': [''],
      'planProgress': [0, Validators.compose([Validators.min(0), Validators.max(100), numberValidator])],
      'progress': [0, Validators.compose([Validators.min(0), Validators.max(100), numberValidator])],
      'sfDate': [this.dateService.getWeekStartDate() + '-' + this.dateService.getWeekEndDate(), Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['weekplan']) {
        const weekplan = JSON.parse(params['weekplan']);
        weekplan['sfDate'] = this.dateService.formatDate(new Date(weekplan['startDate'])) + '-'
                           + this.dateService.formatDate(new Date(weekplan['finishDate']));
        this.datePicker.dateFrom = new Date(weekplan['startDate']);
        this.datePicker.dateTo = new Date(weekplan['finishDate']);
        delete weekplan['startDate'];
        delete weekplan['finishDate'];
        this.myForm.setValue(weekplan);
      }
    });
  }

  ngAfterContentInit() {
  }

  handleSave() {
    this.dispatch();
    this.formReset();
    this.btn_Save_mouseover = false;
  }

  handleSaveAndClose() {
    this.dispatch();
    this.formReset();
    this.routeWeekplanManageComononet();
    this.btn_SaveAndClose_mouseover = false;
  }

  handleCancel() {
    this.routeWeekplanManageComononet();
    this.btn_Cancel_mouseover = false;
  }

  handleSaveMouseoverAndMouseout() {
    this.btn_Save_mouseover  = !this.btn_Save_mouseover;
  }

  handleSaveAndCloseMouseoverAndMouseout() {
    this.btn_SaveAndClose_mouseover  = !this.btn_SaveAndClose_mouseover;
  }

  handleCancelMouseoverAndMouseout() {
    this.btn_Cancel_mouseover  = !this.btn_Cancel_mouseover;
  }

  formReset() {
    this.myForm.reset({
      'id': '',
      'taskName': '',
      'acceptanceCriteria': '',
      'planResourcePercent': 0,
      'resourcePercent': 0,
      'planPercentComplete': 0,
      'percentComplete': 0,
      'note': '',
      'unCompleteDeclare': '',
      'measure': '',
      'planProgress': 0,
      'progress': 0,
      'sfDate': this.dateService.getWeekStartDate() + '-' + this.dateService.getWeekEndDate()
    });
  }

  routeWeekplanManageComononet() {
    this.router.navigate(['/weekplan/weekplanmanage/second']);
  }

  dispatch() {
    const weekplan: Weekplan = {
      id: this.myForm.value['id'],
      taskName: this.myForm.value['taskName'],
      acceptanceCriteria: this.myForm.value['acceptanceCriteria'],
      userID: this.myForm.value['userID'] || '1',
      planResourcePercent: this.myForm.value['planResourcePercent'],
      resourcePercent: this.myForm.value['resourcePercent'],
      planPercentComplete: this.myForm.value['planPercentComplete'],
      percentComplete: this.myForm.value['percentComplete'],
      note: this.myForm.value['note'],
      unCompleteDeclare: this.myForm.value['unCompleteDeclare'],
      measure: this.myForm.value['measure'],
      planProgress: this.myForm.value['planProgress'],
      progress: this.myForm.value['progress'],
      startDate: this.myForm.value['sfDate'].split('-')[0],
      finishDate: this.myForm.value['sfDate'].split('-')[1],
    };
    if (this.myForm.value['id'] && this.myForm.value['id'] !== '') {
      this.store.dispatch(new WeekplanActions.EditWeekplanAction(weekplan));
    } else {
      this.myForm.value['id'] = UUID.UUID();
      weekplan['id'] = this.myForm.value['id'];
      this.store.dispatch(new WeekplanActions.AddWeekplanAction(weekplan));
    }
  }

  handle() {
    // console.log(this.myForm.valid);
    // console.log(this.myForm.controls['taskName'].hasError('required'));
    // console.log(this.myForm.controls['planResourcePercent'].hasError('required'));
    // console.log(this.myForm.controls['planResourcePercent'].hasError('isnumber'));
    // console.log(this.myForm.controls['planResourcePercent'].hasError('min'));
    // console.log(this.myForm.controls['planResourcePercent'].hasError('max'));
    // console.log(this.myForm.controls['resourcePercent'].hasError('required'));
    // console.log(this.myForm.controls['resourcePercent'].hasError('isnumber'));
    // console.log(this.myForm.controls['resourcePercent'].hasError('min'));
    // console.log(this.myForm.controls['resourcePercent'].hasError('max'));
    // console.log(this.myForm.controls['planPercentComplete'].hasError('required'));
    // console.log(this.myForm.controls['planPercentComplete'].hasError('isnumber'));
    // console.log(this.myForm.controls['planPercentComplete'].hasError('min'));
    // console.log(this.myForm.controls['planPercentComplete'].hasError('max'));
    // console.log(this.myForm.controls['percentComplete'].hasError('required'));
    // console.log(this.myForm.controls['percentComplete'].hasError('isnumber'));
    // console.log(this.myForm.controls['percentComplete'].hasError('min'));
    // console.log(this.myForm.controls['percentComplete'].hasError('max'));
    // console.log(this.myForm.controls['sfDate'].hasError('required'));
    // console.log(this.myForm.controls['planProgress'].hasError('isnumber'));
    // console.log(this.myForm.controls['planProgress'].hasError('min'));
    // console.log(this.myForm.controls['planProgress'].hasError('max'));
    // console.log(this.myForm.controls['progress'].hasError('isnumber'));
    // console.log(this.myForm.controls['progress'].hasError('min'));
    // console.log(this.myForm.controls['progress'].hasError('max'));
    // console.log(this.myForm.controls['taskName'].valid);
    // console.log(this.myForm.controls['planResourcePercent'].valid);
    // console.log(this.myForm.controls['resourcePercent'].valid);
    // console.log(this.myForm.controls['planPercentComplete'].valid);
    // console.log(this.myForm.controls['percentComplete'].valid);
    // console.log(this.myForm.controls['sfDate'].valid);
    // console.log(this.myForm.controls['planProgress'].valid);
    // console.log(this.myForm.controls['progress'].valid);
  }
}
