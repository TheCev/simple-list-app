//Angular
import { Injectable } from '@angular/core';
//Interfaces
import {List} from 'src/app/modules/lists/interfaces/list.interface'; // import the list interface
//Http
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
//rxjs
import {Observable, throwError, pipe, Subject, Subscription} from 'rxjs';
import { catchError } from 'rxjs/operators'
//Services
import { ApiRestService } from 'src/app/shared/services/api-rest.service' //import the api service


@Injectable({ 
  providedIn: 'root'
}) 

export class ListService {

	//Dependencys injection

	constructor( 
		private http: HttpClient, 
		private api: ApiRestService
		) { }

	//handle the comunication with events click, between the list component and the button component
	private addListEvent = new Subject<any>()
	private apiUrl:string = this.api.apiUrl //get the api url
	private token:string = this.api.getToken() //get the token for the api
	//Http headers config
	private httpOptions = {
		headers:new HttpHeaders(
			{'Authorization': 'Bearer ' + this.token })
		}

	//Methods

	// send the click event to the list component method
	sendAddListEvent():void{
		//send the click event
		this.addListEvent.next()
	}

	//get the click event in the list method
	getAddListEvent():Observable<any>{
		//get the click event
		return this.addListEvent.asObservable()
	}

	//send the list method
	sendList(userId:number,listTitle:string):Observable<any>{
		//create the new list
		const newList = {
			'title':listTitle,
			'userId':userId
		}
		//send the list to the database throught the http post method
		return this.http.post<any>(`${this.apiUrl}/lists/`,newList,this.httpOptions)
		.pipe(
			//handle errors
			catchError((err) => this.api.handleError(err))
			)
	}

	// get the lists of the user method
  	getLists(userId):Observable<any>{
		//get all the lists from the server throught the http get method
		return this.http.get(`${this.apiUrl}/lists/user/${userId}`,this.httpOptions)
		.pipe(
			//handle errors
			catchError((err) => this.api.handleError(err))
			)
	}

	//Delete a list
	deleteList(listId):Observable<any>{

		//delete a list from the server throught the http delete method
		return this.http.delete(`${this.apiUrl}/lists/${listId}`,this.httpOptions)
		.pipe(
			//handle errors
			catchError((err) => this.api.handleError(err))
			)
	}

	//Edit a list method
	editList(listId, listTitle):Observable<any>{
		//create data object
		const data = {
			'title':listTitle
		}
		//edit a list from the server throught the http put method
		return this.http.put<any>(`${this.apiUrl}/lists/${listId}`, data , this.httpOptions)

	}
}
