import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/modules/tasks/services/tasks.service';
import { Task, List } from 'src/app/modules/lists/interfaces/list.interface';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})

export class TasksComponent implements OnInit {

	listId:string;
	loading:boolean
	list = { 'title':"" };
	userId:number
	tasks:any[] = [];

	percentage:number = 0

	tasksDone:Task[] = []

	constructor(

		private route: ActivatedRoute,
		private tasksSvc:TasksService

		) { 
		this.loading = true
		this.userId = JSON.parse(localStorage.getItem('user')).userId
	}

	showTasks():void {
		this.loading = true
		this.tasksSvc.getTasks(this.userId,this.listId).subscribe(tasks => {
			this.tasks = tasks
			this.updatePercentage()
			this.loading = false
		})
		
	}

	getList():void{

		this.tasksSvc.getList(this.listId,).subscribe((list) => {
			this.list = list
			this.loading = false
			
		})

	}

	addNewTask(taskTitle):void {

		this.tasksSvc.sendTask(this.userId,this.listId,taskTitle).subscribe((task:Task) => { 
			this.showTasks()
			this.updatePercentage()
			
		})

	}

	changeState(task:Task):void{
		this.loading = true
		/*switch (task.state) {
			case true:
				task.state = false
				break;
			
			case false:
				task.state = true
				break;
		}*/




		this.tasksSvc.changeState(this.listId,task).subscribe((data) => {
			
			this.showTasks()

		})	

	}

	deleteTask(id):void{
		this.loading = true

		this.tasksSvc.deleteTask(id).subscribe(task => {	
			//const index = this.tasks.findIndex((task) => task.id === id)
			//this.tasks.splice(index,1)
			
			this.showTasks()
			this.updatePercentage()
		
		})
	}

	updatePercentage():void{

		this.tasksDone = this.tasks.filter((task) => task.state === true )
		this.percentage = this.tasksDone.length / this.tasks.length * 100
		


	}

	ngOnInit(){
		
		this.route.params.subscribe(params => {
			this.listId = params['listId']
			this.showTasks()
			this.getList()

		})

	}
	
}
