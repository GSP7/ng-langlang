//import { IUser } from './../../models/IUser';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

//import { AuthService } from './../../services/auth/auth.service';
//import { SweetAlertService } from './../../services/sweetalert.service';



@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	 currentUser:any;
	// constructor(private authService:  AuthService,
	// 			private router:Router,
	// 			private alertService:SweetAlertService	 ) { }

	ngOnInit() {
		this.currentUser = {username:'Admin'}  //this.authService.currentUser;
	}

	loginOut($event:any){
		let self = this;
		$event.preventDefault();
		// this.alertService.confirm({
		// 	title:'确认要退出吗？',
		// 	confirmButtonText: '确认退出!',
  		// 	cancelButtonText: '不，在呆会儿!',
		// }).then(function(){
		// 	self.authService.loginOut();
		// 	self.router.navigateByUrl('/login');
		// })

	
	}
}
