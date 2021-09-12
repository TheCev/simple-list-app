//Angular
import { Component } from '@angular/core';
//material component
import { MatDialogRef } from '@angular/material/dialog';
//forms
import { FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-add-task-dialog',
  template: `
	<h2 mat-dialog-title>Create a New Task</h2>
		<div mat-dialog-content >
			<mat-form-field>
			<input matInput [formControl]="titleInput" placeholder="Insert Task Title" />
			</mat-form-field>
		<mat-error *ngIf="checkTitleInput()">The title cannot be more than 40 characters</mat-error>

		</div>
		<div mat-dialog-actions>
			<button mat-button (click)="onNoClick()">Cancel</button>
			<button mat-button [mat-dialog-close]="titleInput.value" [disabled]="!titleInput.valid" >Add Task</button>
		</div>`,
  styles: ['']
})

export class AddTaskDialogComponent {

	//Properties
	//public invalid:boolean //if the title input is valid or not
  	//public title:string //the task title
  	titleInput:FormControl = new FormControl('',[ Validators.required, Validators.maxLength(40)])

	//Dependencies injection
 constructor( public dialogRef: MatDialogRef<AddTaskDialogComponent> ) { }

 	//if the cancel button is pressed
  onNoClick():void {
  	this.dialogRef.close() //close the 

  }

  checkTitleInput():boolean{
  	return this.titleInput.hasError('maxlength') && this.titleInput.dirty
  }

  //verify if the title input is valid or not
  /*checkInvalid(invalid):void{
  	this.invalid = invalid
  }
  //get the task title from the app-title-input component
  getTitle(title):void {
  	this.title = title
  }*/


}
