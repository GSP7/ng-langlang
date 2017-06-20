import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layout/full-layout.component';

import { MenusResolver } from './services/menus.resolver';
// import { P404Component } from './pages/404.component';
// import { LoginComponent } from './pages/login/login.component';

// import { AuthGuard } from './services/auth/auth-guard.service';

export const routes: Routes = [
    // { path:'login', component: LoginComponent},
    // { path:'', redirectTo: 'dashboard', pathMatch:'full'},
    { path: '', component:  FullLayoutComponent, data: { title: 'Home' },
      resolve: {menus: MenusResolver},
      children: [
        { path: 'weekplan', loadChildren: './weekplan/weekplan.module#WeekplanModule'}
      ]
    }
]

@NgModule({
    imports: [
      RouterModule.forRoot(routes, { useHash: true, enableTracing: false})
    ], // enableTracing: 开启路由事件跟踪
    exports: [
      RouterModule
    ]
})
export class AppRoutingModule {

}
