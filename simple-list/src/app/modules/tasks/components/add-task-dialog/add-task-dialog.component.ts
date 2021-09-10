//Angular
import { Component } from '@angular/core';
//material component
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task-dialog',
  template: `
	<h2 mat-dialog-title>Create a New Task</h2>
		<div mat-dialog-content >

		<app-title-input (title)="getTitle($event)" (invalidInput)="checkInvalid($event)"></app-title-input>

		</div>
		<div mat-dialog-actions>
			<button mat-button (click)="onNoClick()">Cancel</button>
			<button mat-button [mat-dialog-close]="title" [disabled]="invalid" >Add</button>
		</div>`,
  styles: ['']
})

export class AddTaskDialogComponent {

	//Properties
	public invalid:boolean //if the title input is valid or not
  	public title:string //the task title

	//Dependencies injection
 constructor( public dialogRef: MatDialogRef<AddTaskDialogComponent> ) { }

 	//if the cancel button is pressed
  onNoClick():void {
  	this.dialogRef.close() //close the dialog
  }


  //verify if the title input is valid or not
  checkInvalid(invalid):void{
  	this.invalid = invalid
  }
  //get the task title from the app-title-input component
  getTitle(title):void {
  	this.title = title
  }


}
