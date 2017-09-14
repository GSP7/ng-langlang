import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { DatetoolsService } from '../services/datetools.service';
import { WeekplanserviceService } from './services/weekplanservice.service';

// Modal Component
import { ModalModule, PaginationModule, AlertModule } from 'ngx-bootstrap';
import { NgDateRangePickerModule } from 'ng-daterangepicker';

// Routing
import { WeekPlanRoutingModule } from './weekplan-routing.module'

// my Component
import { WeekplanmanageComponent } from './weekplanmanage/weekplanmanage.component';
import { WeekplancardComponent } from './weekplancard/weekplancard.component';
import { WeekplanlistComponent } from './weekplanlist/weekplanlist.component';
import { CheckboxdirectiveDirective } from './Directive/checkboxdirective.directive';
import { WeekplantoolbarComponent } from './weekplantoolbar/weekplantoolbar.component';
import { WeekplanpagingComponent } from './weekplanpaging/weekplanpaging.component';
import { WeekplanformComponent } from './weekplanform/weekplanform.component';

import { WeekplanEffects } from './effects/weekplan';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WeekPlanRoutingModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    EffectsModule.run(WeekplanEffects),
    NgDateRangePickerModule
  ],
  declarations: [
    WeekplanmanageComponent,
    WeekplancardComponent,
    WeekplanlistComponent,
    CheckboxdirectiveDirective,
    WeekplantoolbarComponent,
    WeekplanpagingComponent,
    WeekplanformComponent
  ],
  providers: [
    DatetoolsService,
    WeekplanserviceService
  ]
})
export class WeekplanModule { }
