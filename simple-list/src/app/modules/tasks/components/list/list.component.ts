//Angular
import { Component, OnInit, OnDestroy, Input} from '@angular/core';
//Services
import { TasksService } from 'src/app/modules/tasks/services/tasks.service'
//Activated Route
import { ActivatedRoute } from '@angular/router';
//rxjs
import { Subscription } from 'rxjs'
//Angular material components
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
//components
import { EditTaskDialogComponent } from 'src/app/modules/tasks/components/edit-task-dialog/edit-task-dialog.component'
import { AddTaskDialogComponent } from 'src/app/modules/tasks/components/add-task-dialog/add-task-dialog.component'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})

export class ListComponent implements OnInit, OnDestroy {

	//Properties
	@Input() listId: number
	load:boolean = false
	tasks: any[] = []
	tasksDone:any[] = []
	percentage:number 
	private subscriptions = new Subscription() //subscriptions array component

	//Dependy Injection
  constructor(
  	private tasksSvc: TasksService,
  	private route: ActivatedRoute,
  	private dialog: MatDialog,
    private snackBar: MatSnackBar
  	) {  }

  //Methods

  //show tasks method, refresh and show
  	showTasks():void{
  		

  		this.load = false //activate the spinner
  		const userId = JSON.parse(localStorage.getItem('user')).userId //get the userId
  		//get tasks from the server
  		//add the Subscription to the subscriptions array
  		this.subscriptions
  		.add(this.tasksSvc.getTasks(userId,this.listId).subscribe((tasks) => {
  			//get the tasks
  			this.tasks = tasks
  			this.getTasksDone()
  			this.load = true
  		}))
  	}

    openSucessfullySnackBar(message):void{
      this.snackBar.open(message,'',{
        duration:3500,
        panelClass:['successfully-snack-bar'],
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      })
    }

  	//
  	openAddTaskDialog():void{
  		const dialogRef = this.dialog.open(AddTaskDialogComponent, {
  			width:'300px'
  		})

  		dialogRef.afterClosed().subscribe((result) => {
  			if(result){
  				this.addNewTask(result)
  			}else{
  				this.load = true
  			}
  		})


  	}

  	addNewTask(title):void {
  		const userId = JSON.parse(localStorage.getItem('user')).userId
  		this.load = false
  		this.tasksSvc.sendTask(userId, this.listId, title).subscribe(() => {
  			this.showTasks()
        this.openSucessfullySnackBar('Has been Added a Task')
  		})
  	}

  	//delete a task method
	deleteTask(id):void{

    const index = this.tasks.findIndex((task) => task.id === id)

    this.tasks.splice(index,1)

		//add the Subscription to the subscriptions array component
		//delete a task from the server
		this.subscriptions
		.add(this.tasksSvc.deleteTask(id).subscribe(task => {	
			//refresh and show
			this.openSucessfullySnackBar('Changes Saved, Has Been Deleted a Task')
		
		}))
	}

	openEditTaskDialog(id, oldTitle):void {
		const dialogRef = this.dialog.open(EditTaskDialogComponent, {
			width:'300px',
      data:{
          oldTitle
        }
		})

		this.subscriptions
		.add(dialogRef.afterClosed().subscribe((newTitle) => {
			if(newTitle){
				this.editList(id,newTitle)
			}
		}))

	}

	editList(taskId,newTitle):void{

		this.tasks.map((task) => {
      if(task.id === taskId){
        task.title = newTitle
      }
    })

		this.subscriptions
		.add(this.tasksSvc.editTask(taskId,newTitle).subscribe(() => {
			this.openSucessfullySnackBar('Changes Saved, Has been Edited a Task')
		}))
	}



  //LifeCycle hooks

  ngOnInit(): void {
    this.load  = false

  	this.subscriptions.add(this.route.data
      .subscribe( data => {
        const tasks:any[] = data.tasks;
        this.tasks = tasks
        this.load = true
        console.log(data)
        console.log(tasks)
        this.getTasksDone()
      }))

  }


  ngOnDestroy():void {
  	//unsubscribe from  the subscriptions array component
  	this.subscriptions.unsubscribe()
  }

  getTasksDone():void {
  	this.tasksDone = this.tasks.filter((task) => task.state)
  }

  //change state method, indicate the state if done or not the task
  changeState(task):void {
  	this.subscriptions.
    add(this.tasksSvc.changeState(task).subscribe())
  }

}
