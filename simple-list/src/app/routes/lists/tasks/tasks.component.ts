import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/services/list.service';
import { Task, List } from 'src/app/routes/lists/interfaces/task.interface';
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

	tasks:any[] = [];

	percentage:number = 0

	tasksDone:Task[] = []

	constructor(

		private route: ActivatedRoute,
		private listSvc:ListService

		) { 
		this.loading = true
	}

	showTasks():void {
		this.loading = true
		this.listSvc.getTasks(this.listId).subscribe(tasks => {
			this.tasks = tasks
			this.updatePercentage()
			this.loading = false
		})
		
	}

	getList():void{

		this.listSvc.getList(this.listId,).subscribe((list) => {
			this.list = list
			this.loading = false
			
		})

	}

	addNewTask(taskTitle):void {

		this.listSvc.sendTask(this.listId,taskTitle).subscribe((task:Task) => { 
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




		this.listSvc.changeState(this.listId,task).subscribe((data) => {
			
			this.showTasks()

		})	

	}

	deleteTask(id):void{
		this.loading = true

		this.listSvc.deleteTask(id).subscribe(task => {	
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
