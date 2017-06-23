import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage/dist/services';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private authSer: AuthService,
				private storage: SessionStorageService,
	  			private router:Router) { 
					
	}

	/**
	 * 用户登录
	 */
	login(username:string,password:string){
		if(username && password){
			this.authSer.singin(username,password).subscribe(res=>{
				if(res.success){
	  	        	this.authSer.setToken(res["data"]["access_token"], res["data"].expiresData );
	                this.storage.store("username", username);

					this.router.navigate(["/"]);
				}else{
					alert('用户名密码不正确！');
				}
			})
		}
	}

	ngOnInit() {
	}



}
