import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import {AuthService} from '../../shared/services/auth.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-join',
  templateUrl:'join.component.html',
  styleUrls: ['./join.component.sass']
})
export class JoinComponent implements OnInit {

  constructor(
    private authSvc: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  join = new FormGroup({
  	username : new FormControl(''),
  	email: new FormControl(''),
  	password: new FormControl('')
  })

  onJoin():void{
    const data = this.join.value

    this.authSvc.join(data).subscribe((res) => {
      if(res){
        this.router.navigate(['/login'])
      }
    })

  }

}
