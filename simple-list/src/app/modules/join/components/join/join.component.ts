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

@Component({
  selector: 'app-join',
  templateUrl:'join.component.html',
  styleUrls: ['./join.component.sass']
})

export class JoinComponent {

  //Properties
  //join form with the fields
  join = new FormGroup({
    username : new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6) ]),
    repeatedPassword: new FormControl('',[Validators.required, Validators.minLength(6)])
  },{
    validators: comparePasswords
  })

  //Dependencies injetion
  constructor(
    private authSvc: AuthService,
    private router: Router
    ) { }

  //Methods

  //verify if the password are the same
  checkPasswords(): boolean {

    const passwordInput = this.join.get('password')
    const repeatedPasswordInput = this.join.get('password')
    
    return this.join.hasError('notEqual') && passwordInput.dirty && repeatedPasswordInput.dirty
  }

  //verify the min minLength of the username
  checkUsername():boolean {

    const usernameInput = this.join.get('username')
    return usernameInput.hasError('minlength') && usernameInput.dirty
  }

  //verify if is a valid email
  checkEmail():boolean {

    const emailInput = this.join.get('email')
    return emailInput.hasError('email') && emailInput.dirty
  }

  //on submit, send the data to the server
  onJoin():void{
    const data = this.join.value
    delete data.repeatedPassword

    this.authSvc.join(data).subscribe((res) => {
      if(res){
        this.router.navigate(['/login'])
      }
    })
  }

}
