import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeekplanmanageComponent } from './weekplanmanage/weekplanmanage.component';
import { WeekplanformComponent } from './weekplanform/weekplanform.component';

const routes: Routes = [
  {
    path: 'weekplanmanage/:status',
    component: WeekplanmanageComponent,
    data: {
      title: '周计划'
    }
  },
  {
    path: 'weekplanform/:weekplan',
    component: WeekplanformComponent,
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
