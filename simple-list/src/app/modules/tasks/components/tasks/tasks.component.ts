//Angular
import { Component, OnInit, OnDestroy } from '@angular/core';
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

export class TasksComponent implements OnInit, OnDestroy {

	//Properties

	list!:List;
	userId:number
	private subscriptions = new Subscription()

	constructor(

		private route: ActivatedRoute,
		private tasksSvc:TasksService

		) { 


	}


	handleAddTask():void{
		this.tasksSvc.sendAddTaskEvent()
	}


	ngOnInit(){
		this.subscriptions.add(this.route.data.subscribe(data => {
			this.list = data.list
		}) )

	}

	ngOnDestroy(){
		this.subscriptions.unsubscribe()
	}
	
}
