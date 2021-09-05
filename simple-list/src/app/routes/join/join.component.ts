import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import {AuthService} from 'src/app/services/auth.service'
import { Router } from '@angular/router'
import { comparePasswords } from './join.validator'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-join',
  templateUrl:'join.component.html',
  styleUrls: ['./join.component.sass']
})
export class JoinComponent {

  constructor(
    private authSvc: AuthService,
    private router: Router
    ) { }

  join = new FormGroup({
  	username : new FormControl('', [Validators.required, Validators.minLength(6)]),
  	email: new FormControl('', [Validators.email, Validators.required]),
  	password: new FormControl('', [Validators.required, Validators.minLength(6) ]),
    repeatedPassword: new FormControl('',[Validators.required, Validators.minLength(6)])
  },{
    validators: comparePasswords
  })

  checkPasswords(): boolean {

    const passwordInput = this.join.get('password')
    const repeatedPasswordInput = this.join.get('password')
    
    return this.join.hasError('notEqual') && passwordInput.dirty && repeatedPasswordInput.dirty
  }

  checkUsername():boolean {

    const usernameInput = this.join.get('username')
    return usernameInput.hasError('minlength') && usernameInput.dirty
  }

  checkEmail():boolean {

    const emailInput = this.join.get('email')
    return emailInput.hasError('email') && emailInput.dirty
  }

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
