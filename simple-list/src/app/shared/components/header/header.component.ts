import { Component, OnInit } from '@angular/core';
import { AuthService }  from 'src/app/shared/services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent implements OnInit {
	isLogged = false

  constructor(
  	private authSvc:AuthService,
  	private router: Router
  	) {
  }

  ngOnInit(): void {
  	this.authSvc.isLogged.subscribe(res => {
  		this.isLogged = res
  	})
  }

  onLogout():void {
  	this.authSvc.logout() 
  	this.router.navigate(['/login'])	
  }

}
