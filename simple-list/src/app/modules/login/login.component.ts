import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent {

	login = new FormGroup({
		username: new FormControl('',[Validators.required, Validators.minLength(6)]),
		password: new FormControl('', [Validators.required, Validators.minLength(6)])
	})

	constructor(
		private authSvc: AuthService,
		private router: Router
		){ }

	checkUsernameInput():boolean {
		const usernameInput = this.login.get('username')
		return usernameInput.hasError('minlength') && usernameInput.dirty
	}

	checkPasswordInput():boolean {
		const passwordInput = this.login.get('password')
		return passwordInput.hasError('minlength') && passwordInput.dirty
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
