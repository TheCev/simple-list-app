import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

	login = new FormGroup({
		username: new FormControl(''),
		password: new FormControl('')
	})

	constructor(
		private authSvc: AuthService,
		private router: Router
		){ }

	ngOnInit(){
	
	}

	onLogin():void{
		const formValue = this.login.value
		this.authSvc.login(formValue).subscribe( res => {
			if(res){
				this.router.navigate(['/lists'])
			}
		})
	}

}
