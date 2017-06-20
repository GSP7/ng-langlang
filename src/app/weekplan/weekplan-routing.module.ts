import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeekplanmanageComponent } from './weekplanmanage/weekplanmanage.component'

const routes: Routes = [
  {
    path: '',
    component: WeekplanmanageComponent,
    data: {
      title: '周计划'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeekPlanRoutingModule {}
