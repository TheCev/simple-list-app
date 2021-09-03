import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators'
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class CheckUnLoginGuard implements CanActivate {

	constructor(
		private authSvc:AuthService,
		private router:Router
		){ }

  canActivate(): Observable<boolean> {

    return this.authSvc.isLogged.pipe(
    	take(1),
    	map((isLogged: boolean) => {
    		if(isLogged){
    			return true
    		}else{
    			this.router.navigate(['/login'])
    			return false
    		}
    	})
    	)
  }
  
}
