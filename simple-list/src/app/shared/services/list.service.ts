import { Injectable } from '@angular/core';
import {Task, List} from 'src/app/routes/lists/interfaces/task.interface';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import {Observable, throwError, pipe } from 'rxjs';
import { catchError } from 'rxjs/operators'
@Injectable({ 
  providedIn: 'root'
})

export class ListService {

	private token = localStorage.getItem('token')
	private user = JSON.parse(localStorage.getItem('user'))

	private apiUrl = '/api'
	
	private handleError(error:HttpErrorResponse){
		
			console.error('An error ocurred: ', error.error.message )
			window.alert( error.error.message )
			 return throwError('SOMETHING BAD HAPPENED')
		
	}

	constructor( private http: HttpClient ) {
		
		
	}
	private httpOptions = {
		headers:
			{'Authorization': 'Bearer ' + this.token }
		}

	getList(listId):Observable<any>{

		return this.http.get(`${this.apiUrl}/lists/${listId}`, this.httpOptions)
		.pipe(
			catchError((err) => this.handleError(err))
			)

	}

	getTasks(listId):Observable<Task[]>{

		return this.http.get<any[]>(`${this.apiUrl}/tasks/user/${this.user.userId}/list/${listId}`, this.httpOptions)
		.pipe(
			catchError((err) => this.handleError(err))
			)
		

	}

	sendList(userId,listTitle:string):Observable<any>{

		const newList = {
			'title':listTitle,
			'userId':userId
		}

		return this.http.post<any>(`${this.apiUrl}/lists/`,newList,this.httpOptions)
		.pipe(
			catchError((err) => this.handleError(err))
			)
		

	}

	sendTask(listId,title):Observable<Task>{

		let tasksUrl = `${this.apiUrl}/tasks`

		const newTask = {
			userId: this.user.userId,
			listId,
			title,
			state: false
		}

		return this.http.post<any>(tasksUrl, newTask, this.httpOptions)

	}
	
  	getLists(userId):Observable<any>{
		
		return this.http.get(`${this.apiUrl}/lists/user/${userId}`,this.httpOptions)
		.pipe(
			catchError((err) => this.handleError(err))
			)
		



 
	}

	deleteList(listId):Observable<any>{

		return this.http.delete(`${this.apiUrl}/lists/${listId}`,this.httpOptions)
		.pipe(
			catchError((err) => this.handleError(err))
			)
	}

	deleteTask(taskId):Observable<any>{

		let taskUrl  =`${this.apiUrl}/tasks/${taskId}`
		return this.http.delete(taskUrl, this.httpOptions)
		.pipe(
			catchError((err) => this.handleError(err))
			)

	}

	changeState(listId,task):Observable<any>{

		let tasksUrl = this.apiUrl + `/tasks/${task.id}/state`
		return this.http.put(tasksUrl,task, this.httpOptions)
		.pipe(
			catchError((err) => this.handleError(err))
			)

	}

	checkUser():Observable<any>{
		return this.http.get(`${this.apiUrl}/auth`,this.httpOptions)
		.pipe(
			catchError((err) => this.handleError(err))
			)
	}

}
