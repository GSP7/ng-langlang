import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, Route, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate,CanLoad{
    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        return this.checkLoginState(route.path);
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.checkLoginState(state.url);
    }

    constructor(private authService: AuthService, private router: Router){

    }

    checkLoginState(url:string){
        if(this.authService.isLogin()){
            return true;
        }

        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    }
}