import { Injectable } from '@angular/core';
import {Task} from 'src/app/modules/lists/interfaces/list.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {Observable, throwError, pipe } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { ApiRestService } from 'src/app/shared/services/api-rest.service'

@Injectable({
  providedIn: 'root'
})

export class TasksService {

	constructor(
		private http: HttpClient,
		private api: ApiRestService
		){

	}

	private token:string = this.api.getToken()

	private apiUrl:string = this.api.apiUrl

	private httpOptions = {
		headers: new HttpHeaders({
			Authorization: 'Bearer ' + this.token
		})
	}

	getList(listId):Observable<any>{

		return this.http.get(`${this.apiUrl}/lists/${listId}`, this.httpOptions)
		.pipe(
			catchError((err) => this.api.handleError(err))
			)

	}
	getTasks(userId,listId):Observable<Task[]>{

		return this.http.get<any[]>(`${this.apiUrl}/tasks/user/${userId}/list/${listId}`, this.httpOptions)
		.pipe(
			catchError((err) => this.api.handleError(err))
			)
		

	}
	sendTask(userId,listId,title):Observable<Task>{

		let tasksUrl = `${this.apiUrl}/tasks`

		const newTask = {
			userId,
			listId,
			title,
			state: false
		}

		return this.http.post<any>(tasksUrl, newTask, this.httpOptions)

	}

	deleteTask(taskId):Observable<any>{

		let taskUrl  =`${this.apiUrl}/tasks/${taskId}`
		return this.http.delete(taskUrl, this.httpOptions)
		.pipe(
			catchError((err) => this.api.handleError(err))
			)

	}
	changeState(listId,task):Observable<any>{

		let tasksUrl = this.apiUrl + `/tasks/${task.id}/state`
		return this.http.put(tasksUrl,task, this.httpOptions)
		.pipe(
			catchError((err) => this.api.handleError(err))
			)

	}


}
