import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router'
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent {

	login = new FormGroup({
		password: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
		username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(30)])
	})

	constructor(
		private authSvc: AuthService,
		private router: Router,
		private snackBar: MatSnackBar
		){ }

	//verify password min length

	checkPasswordMinLength():boolean {
    const passwordInput = this.login.get('password')
    return passwordInput.hasError('minlength') && passwordInput.dirty
  }

  //verify the password max length
  checkPasswordMaxLength():boolean {
    const passwordInput = this.login.get('password')
    return passwordInput.hasError('maxlength') && passwordInput.dirty
  }

  //verify the min minLength of the username
  checkUsernameMinLength():boolean {

    const usernameInput = this.login.get('username')
    return usernameInput.hasError('minlength') && usernameInput.dirty
  }

  //verify the max length of the username
  checkUsernameMaxLength():boolean {
    const usernameInput = this.login.get('username')
    return usernameInput.hasError('maxlength') && usernameInput.dirty
  }



	openWarningSnackBar(message):void {
		this.snackBar.open(message, '', {
			duration: 3500,
			panelClass: ['warning-snack-bar'],
			verticalPosition: 'top',
			horizontalPosition:'center'

		})
	}

	openSuccessSnackBar(message):void {
		this.snackBar.open(message, '', {
			duration: 1500,
			panelClass: ['successfully-snack-bar'],
			verticalPosition:'top',
			horizontalPosition:'center'
		})
	}


	//verify if inputs are incorrect
	checkInputs:boolean = false

	onLogin():void{
		const formValue = this.login.value
		this.openSuccessSnackBar('Log In ...')
		this.authSvc.login(formValue).subscribe( res => {
			if(res){
				this.router.navigate(['/lists'])
			}
		},
		err => {
			if(err.message){
				this.openWarningSnackBar('Username or Password are incorrect')
			}else{
				this.openWarningSnackBar('Failed Connection')
			}
			//TODO: failed connection message
		}
		)
	}

}
