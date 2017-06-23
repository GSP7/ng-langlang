import { AuthGuardService } from './services/auth/auth-guard.service';
import { AuthService, API_BASE_URL } from './services/auth/auth.service';
import { NgModule, OpaqueToken } from '@angular/core';
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

import { CookieService } from './services/auth/cookie.service';
import { MenuService } from './services/menu.service';
import { MenusResolver } from './services/menus.resolver';
import { LoginComponent } from './account/login/login.component';

import {Ng2Webstorage} from 'ngx-webstorage';
import { PasswordComponent } from './account/password/password.component';




@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		BreadcrumbsComponent,
		FullLayoutComponent,
		NAV_DROPDOWN_DIRECTIVES,
		AsideToggleDirective,
		SIDEBAR_TOGGLE_DIRECTIVES,
		LoginComponent,
		PasswordComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		BsDropdownModule.forRoot(),
		Ng2Webstorage,
		AppRoutingModule,

	],
	providers: [
		{provide:API_BASE_URL, useValue:'http://localhost:56717/api'},
		MenuService, 
		MenusResolver,
		CookieService,
		AuthService,
		AuthGuardService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
