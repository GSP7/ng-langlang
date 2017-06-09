import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuService {

    private menuUrl = 'assets/data/menus.json';
    constructor(private http:Http) { }

    getMenus(){
        return this.http.get(this.menuUrl).map(res=>{
            const d = res.json();
            return d.data || [];
        });
    }
}