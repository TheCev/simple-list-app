import { Injectable } from '@angular/core';
import { HttpErrorResponse  } from '@angular/common/http'
import { throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

	private token = localStorage.getItem('token')
	private user = JSON.parse(localStorage.getItem('user'))

	getToken():string {
		return localStorage.getItem('token')
	}

	public apiUrl = '/api'
	
	public handleError(error:HttpErrorResponse){
		
			if(error.error.message) console.error('An error ocurred: ', error.error.message )

			window.alert( error.error.message )
			 return throwError('SOMETHING BAD HAPPENED')
		
	}

  constructor() { }
}
