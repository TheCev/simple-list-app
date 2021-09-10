//Angular
import { Component, OnInit } from '@angular/core';
//Services
import { TasksService } from 'src/app/modules/tasks/services/tasks.service';
//Interfaces
import { Task, List } from 'src/app/modules/lists/interfaces/list.interface';
//Router
import {Router, ActivatedRoute, ParamMap } from '@angular/router';
//Rxjs
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})

export class TasksComponent implements OnInit {

	//Properties

	listId:string;
	list = { 'title':"" };
	userId:number
	private subscriptions = new Subscription()

	constructor(

		private route: ActivatedRoute,
		private tasksSvc:TasksService

		) { 

		this.userId = JSON.parse(localStorage.getItem('user')).userId
	}


	getList():void{

		this.tasksSvc.getList(this.listId).subscribe((list) => {
			this.list = list
			
		})

	}

	handleAddTask():void{
		this.tasksSvc.sendAddTaskEvent()
	}


	ngOnInit(){
		
		this.route.params.subscribe(params => {
			this.listId = params['listId']
			this.getList()

		})

	}
	
}
