//Angular
import { Component } from '@angular/core';
//Angular material component
import { MatDialogRef } from '@angular/material/dialog';
//forms
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-edit-task-dialog',
  template: `
	<h2 mat-dialog-title>Edit Task</h2>
		<div mat-dialog-content >

		<app-title-input (title)="getTitle($event)" (inputInvalid)="checkInvalid($event)"></app-title-input>
		</div>
		<div mat-dialog-actions>
			<button mat-button (click)="onNoClick()">Cancel</button>
			<button mat-button [mat-dialog-close]="title" [disabled]="invalid">Edit</button>
		</div>`,
  styles: ['']
})

export class EditTaskDialogComponent {

	//Properties
	public invalid:boolean //if the title input is valid or not
 	public title:string //the task title

	//Dependencies injection
 constructor( public dialogRef: MatDialogRef<EditTaskDialogComponent> ) { }


 //Methods

 //if press the cancel button method
  onNoClick():void {
  	this.dialogRef.close()
  }

 
  //check if the input is valid or not
  checkInvalid(invalid):void{
  	this.invalid = invalid
  }
  //get the task title from the app-title-input component
  getTitle(title):void {
  	this.title = title
  }

 

}
