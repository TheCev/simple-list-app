//angular
import { Injectable } from '@angular/core';
//services
import { ApiRestService } from 'src/app/shared/services/api-rest.service'
//http
import { HttpHeaders, HttpClient } from '@angular/common/http'
//rxjs
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

	//Properties
	userId:string
	token:string = this.api.getToken()
	apiUrl:string = this.api.apiUrl
	httpOptions = {
		headers: new HttpHeaders({
			Authorization: `Bearer ` + this.token
		})
	}

	//Dependencies Injection
  constructor(
  	private api: ApiRestService,
  	private http: HttpClient
  	) {
  	this.userId = JSON.parse(localStorage.getItem('user')).userId
   }

   //Methods

   //get the user info
   getUserInfo():Observable<any>{
   	return this.http.get(`${this.apiUrl}/users/${this.userId}`, this.httpOptions)
   }

   //change the Username
   editUserInfo(user):Observable<any>{

   	return this.http.put(`${this.apiUrl}/users/${this.userId}`,user, this.httpOptions)
   }

}
