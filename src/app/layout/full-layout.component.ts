import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, Data, NavigationEnd } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuService } from '../services/menu.service';


@Component({
    moduleId: module.id,
    selector: 'app-dashboard',
    templateUrl: 'full-layout.component.html',
    styles:[`
        .nav-dropdown-items .nav-link{padding-left: 2.5rem;}
    `],
    //encapsulation:ViewEncapsulation.None
})

export class FullLayoutComponent implements OnInit {

    currentUrl:string;

    menus: any[];

    constructor(private menuSer: MenuService,
                private route: ActivatedRoute,
                private router: Router) { 
                  router.events.subscribe((e)=>{
                      if(e instanceof NavigationEnd){
                          this.currentUrl = e.url;
                      }
                  });
    }

    ngOnInit() { 
        this.route.data.subscribe((data:Data)=>{
            this.menus = data["menus"];
        });
        // this.menuSer.getMenus().subscribe((menus)=>{
        //     this.menus = menus;
        // }, error => console.error(error))
    }
    getChildMenus(id:number){
        return this.menus.filter((a)=>{
            return a.parentId === id;
        });
    }

    hasChildren(pid:number):boolean{
        return this.getChildMenus(pid).length > 0
    }

    hasCurrentUrl(parentMenu:any):boolean{
        if(this.currentUrl){
            let currentMenu = this.menus.filter((a)=>{
                return a.url === this.currentUrl;
            });
            if(currentMenu.length){
                let menu = currentMenu[0];
                return menu.parentId === parentMenu.id;
            }
            return false;
        }
        return false;
    }
}