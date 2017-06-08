import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MenuService } from './menu.service';

@Injectable()
export class MenusResolver implements Resolve<any>{

    constructor(private menuSer: MenuService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.menuSer.getMenus();
    }

}