
import { CookieService } from './cookie.service';
import { Http,Headers,Response } from '@angular/http';
import { Injectable, Inject, Optional, OpaqueToken } from '@angular/core';
import { SessionStorageService } from "ngx-webstorage";
import {Observable} from 'rxjs/Observable';
import "rxjs/add/operator/catch";
export const API_BASE_URL = new OpaqueToken('API_BASE_URL');

@Injectable()
export class AuthService{
    redirectUrl:string;
    private appPath =  '/';
    private tokenCookieName = 'Abp.AuthToken';
    private baseUrl: string = undefined; 

    constructor(private http:Http,private langCooki: CookieService,
                private storage: SessionStorageService,
              @Optional() @Inject(API_BASE_URL) baseUrl?: string,
    ){
        this.baseUrl = baseUrl || "";
    }

    singin(username:string,password:string){
        let url_ = this.baseUrl + "/auth/sigin";
        let content_ = JSON.stringify({ username: username,password:password });

        return this.http.request(url_,{
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            })

        }).map(res =>{
            //const status = res.status; 
            return res.json() ;
        })
    }

    setToken(authToken?:string, expireDate?:any) {
        this.langCooki.setCookieValue(this.tokenCookieName, authToken, expireDate, this.appPath);
    };

    getToken() {
        return this.langCooki.getCookieValue(this.tokenCookieName);
    }

    clearToken() {
        this.setToken();
    }

    getUserName(){
        return this.storage.retrieve("username");
    }

    isLogin(){
        return !!this.getUserName();
    }
}