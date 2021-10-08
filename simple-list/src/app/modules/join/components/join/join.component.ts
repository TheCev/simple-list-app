//Angular
import { Component, OnDestroy } from '@angular/core';
//Forms
import { FormControl, FormGroup, Validators } from '@angular/forms'
//services
import {AuthService} from 'src/app/shared/services/auth.service'
//Router
import { Router } from '@angular/router'
//customs validator
import { comparePasswords } from '../validators/join.validator'
//Rxjs
import { Subscription } from 'rxjs'
//material components
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-join',
  templateUrl:'join.component.html',
  styleUrls: ['./join.component.sass']
})

export class JoinComponent {

  //Properties
  //join form with the fields
  join = new FormGroup({
    username : new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
    repeatedPassword: new FormControl('',[Validators.required, Validators.minLength(6)])
  },{
    validators: comparePasswords
  })

  //Dependencies injetion
  constructor(
    private authSvc: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  //Methods

  //verify if the password are the same
  checkPasswords(): boolean {

    const passwordInput = this.join.get('password')
    const repeatedPasswordInput = this.join.get('password')
    
    return this.join.hasError('notEqual') && passwordInput.dirty && repeatedPasswordInput.dirty
  }

  //verify the password minlength
  checkPasswordMinLength():boolean {
    const passwordInput = this.join.get('password')
    return passwordInput.hasError('minlength') && passwordInput.dirty
  }

  //verify the password max length
  checkPasswordMaxLength():boolean {
    const passwordInput = this.join.get('password')
    return passwordInput.hasError('maxlength') && passwordInput.dirty
  }

  //verify the min minLength of the username
  checkUsernameMinLength():boolean {

    const usernameInput = this.join.get('username')
    return usernameInput.hasError('minlength') && usernameInput.dirty
  }

  //verify the max length of the username
  checkUsernameMaxLength():boolean {
    const usernameInput = this.join.get('username')
    return usernameInput.hasError('maxlength') && usernameInput.dirty
  }

  //verify if is a valid email
  checkEmail():boolean {

    const emailInput = this.join.get('email')
    return emailInput.hasError('email') && emailInput.dirty
  }

  openWarningSnackBar(message):void{
    this.snackBar.open(message, '', {
      duration: 3500,
      panelClass:['warning-snack-bar'],
      verticalPosition: 'top',
      horizontalPosition: 'center'

    })
  }

  openSuccessfullySnackBar(message):void {
    this.snackBar.open(message, '', {
      duration: 1500,
      panelClass:['successfully-snack-bar'],
      verticalPosition: 'top',
      horizontalPosition: 'center'
    })
  }

  checkEmailExist:boolean = false

  //check if the username already exist

  //on submit, send the data to the server
  onJoin():void{
    const data = this.join.value
    delete data.repeatedPassword

    this.openSuccessfullySnackBar('Sending ...')
    this.authSvc.join(data).subscribe((res) => {

      if(res){
        this.router.navigate(['/login'])
      }
    },
    err => {
      console.log(err)
      switch(err.message){
        case "Email was used already":
          this.openWarningSnackBar('Email Was Used Already')
          break;
        case "Username already exist":
          this.openWarningSnackBar('Username Already Exist')
          break;
        default:
          this.openWarningSnackBar('Failed Connection')
      }
    })
  }

}
