import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layout/full-layout.component';
import { LoginComponent } from './account/login/login.component';

import { MenusResolver } from './services/menus.resolver';
// import { P404Component } from './pages/404.component';
import { AuthGuardService } from './services/auth/auth-guard.service';

export const routes: Routes = [
    { path:'login', component: LoginComponent},
    { path:'', component:  FullLayoutComponent, 
        data: { title: 'Home' },   
        resolve:{menus: MenusResolver},
        canActivate:[ AuthGuardService ]
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes, { useHash:true,enableTracing:false})], // enableTracing: 开启路由事件跟踪
    exports:[ RouterModule ]
})
export class AppRoutingModule{

}