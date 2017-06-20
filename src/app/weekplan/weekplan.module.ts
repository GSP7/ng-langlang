import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap';

// Routing
import { WeekPlanRoutingModule } from './weekplan-routing.module'

// my Component
import { WeekplanmanageComponent } from './weekplanmanage/weekplanmanage.component';
import { WeekplancardComponent } from './weekplancard/weekplancard.component';
import { WeekplanlistComponent } from './weekplanlist/weekplanlist.component';
import { CheckboxdirectiveDirective } from './Directive/checkboxdirective.directive';
import { WeekplantoolbarComponent } from './weekplantoolbar/weekplantoolbar.component';
import { WeekplanpagingComponent } from './weekplanpaging/weekplanpaging.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WeekPlanRoutingModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
  ],
  declarations: [
    WeekplanmanageComponent,
    WeekplancardComponent,
    WeekplanlistComponent,
    CheckboxdirectiveDirective,
    WeekplantoolbarComponent,
    WeekplanpagingComponent
  ]
})
export class WeekplanModule { }
