import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import {Observable, throwError, BehaviorSubject } from 'rxjs'
import { map, catchError, retry } from 'rxjs/operators'
import { UserResponse } from 'src/app/modules/lists/interfaces/list.interface'
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router'
import { ApiRestService } from './api-rest.service'

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  private loggedIn = new BehaviorSubject<boolean>(false)

  public get isLogged():Observable<boolean> {
    return this.loggedIn.asObservable();
  }

	private apiUrl:string = this.api.apiUrl

  constructor(
  	private http:HttpClient,
    private router: Router,
    private api: ApiRestService
  	) { 
    this.checkToken()
  }

  handleError(error:HttpErrorResponse):Observable<never>{
    console.log(error.error)
    return throwError(error.error)
  }


  join(authData):Observable<any>{
    return this.http.post(`${this.apiUrl}/users/`, authData)
    .pipe(
      catchError(err => this.handleError(err))
      )
  }



  login(authData):Observable<any> {
  	return this.http
  		.post(`${this.apiUrl}/auth/login`, authData )
  		.pipe(
  			map( (res:UserResponse) => {
    				//Save token()
           if(res.token){
             const user = helper.decodeToken(res.token)

              this.saveToken(user,res.token)  

              this.loggedIn.next(true)
             
           }

           return res

  			}),
        catchError((err) => this.handleError(err))
  			)
  		
  		
  }


  private saveToken(user,token):void{
  	localStorage.setItem('user',JSON.stringify(user))
    localStorage.setItem('token',token)

  }

  public readToken():string{
    return localStorage.getItem('token')
  }
  private checkToken():void{

  	const userToken = localStorage.getItem('token')
    
    if(userToken){
      const isExpired = helper.isTokenExpired(userToken)


      if(isExpired){
      this.logout()
      }else{
        this.loggedIn.next(true)
     
      }

    }else{
      this.loggedIn.next(false)
    }

  	
  	//set UserIsLogged = isExpired
  }

  logout():void {
  	localStorage.removeItem('token');
    localStorage.removeItem('user')
    this.router.navigate(['/login'])
  	this.loggedIn.next(false)

    
  }
}
