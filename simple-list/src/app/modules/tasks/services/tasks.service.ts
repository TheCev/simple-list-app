//Angular
import { Injectable } from '@angular/core';
//Interfaces
import {Task} from 'src/app/modules/lists/interfaces/list.interface';
//Http
import { HttpClient, HttpHeaders } from '@angular/common/http'
//Rxjs
import {Observable, throwError, pipe, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators'
//services
import { ApiRestService } from 'src/app/shared/services/api-rest.service'

@Injectable({
  providedIn: 'root'
})

export class TasksService {

	//Properties

	//property for comunicate between add button component and list component
	private addTaskEvent = new Subject<any>()
	private token:string = this.api.getToken() //get the token
	private apiUrl:string = this.api.apiUrl // get the api url
	//http headers config
	private httpOptions = {
		headers: new HttpHeaders({
			Authorization: 'Bearer ' + this.token
		})
	}

	//Dependendys injection
	constructor(
		private http: HttpClient,
		private api: ApiRestService
		){

	}

	//Methods

	//send the click on the add task button method
	sendAddTaskEvent():void {
		//send the event
		this.addTaskEvent.next()
	}

	//get the click on the add task button method
	getAddTaskEvent():Observable<any> {
		//return as observable
		return this.addTaskEvent.asObservable()
	}

	//get only one list method
	getList(listId):Observable<any>{
		//return a observable from the http get method
		return this.http.get(`${this.apiUrl}/lists/${listId}`, this.httpOptions)
		.pipe(
			//handle errors
			catchError((err) => this.api.handleError(err))
			)
	}

	//get tasks of a list method
	getTasks(userId,listId):Observable<Task[]>{
		//return a observable contain the tasks from the http get method
		return this.http.get<any[]>(`${this.apiUrl}/tasks/user/${userId}/list/${listId}`, this.httpOptions)
		.pipe(
			//handle errors
			catchError((err) => this.api.handleError(err))
			)
	}

	//send a new task 
	sendTask(userId,listId,title):Observable<Task>{

		let tasksUrl = `${this.apiUrl}/tasks`;
		//create the new task
		const newTask = {
			userId,
			listId,
			title,
			state: false
		}

		//return a observable from the http post method
		return this.http.post<any>(tasksUrl, newTask, this.httpOptions)
	}

	//delete a task method
	deleteTask(taskId):Observable<any>{
		
		let taskUrl  =`${this.apiUrl}/tasks/${taskId}`
		//return a observable from the http delete method
		return this.http.delete(taskUrl, this.httpOptions)
		.pipe(
			//handle errors
			catchError((err) => this.api.handleError(err))
			)
	}

	//change a state of one task
	changeState(task):Observable<any>{

		let tasksUrl = this.apiUrl + `/tasks/${task.id}/state`
		//return a observable from the http put method
		return this.http.put(tasksUrl,task, this.httpOptions)
		.pipe(
			//handle errors
			catchError((err) => this.api.handleError(err))
			)

	}

	editTask(taskId, taskTitle):Observable<any>{
		const newTask = {
			title: taskTitle
		}
		return this.http.put(`${this.apiUrl}/tasks/${taskId}`,newTask, this.httpOptions)
	}


}
