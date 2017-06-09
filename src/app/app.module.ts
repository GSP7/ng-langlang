import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from "@angular/http";

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app.routing.module';

import { NAV_DROPDOWN_DIRECTIVES } from './share/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './share/sidebar.directive';
import { AsideToggleDirective } from './share/aside.directive';
import { BreadcrumbsComponent } from './share/breadcrumb.component';

import { FullLayoutComponent } from './layout/full-layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

import { MenuService } from './services/menu.service';
import { MenusResolver } from './services/menus.resolver';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    AsideToggleDirective,
    SIDEBAR_TOGGLE_DIRECTIVES
    

  ],
  imports: [
    BrowserModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [ MenuService,MenusResolver ],
  bootstrap: [AppComponent]
})
export class AppModule { }
