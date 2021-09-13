//Angular
import { Component } from '@angular/core';
//Angular material component
import { MatDialogRef } from '@angular/material/dialog';
//forms
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-edit-task-dialog',
  template: `
	<h2 mat-dialog-title>Edit Task</h2>
		<div mat-dialog-content >
				<mat-form-field>
				<input matInput  [formControl]="titleInput" placeholder="Insert Task Title" />
				</mat-form-field>
			<mat-error *ngIf="checkTitleInput()">The title cannot be more than 40 characters</mat-error>
		</div>
		<div mat-dialog-actions>
			<button mat-button (click)="onNoClick()">Cancel</button>
			<button mat-button [mat-dialog-close]="titleInput.value" [disabled]="!titleInput.valid" >Edit</button>
		</div>`,
  styles: ['']
})

export class EditTaskDialogComponent {

	//Properties
	//public invalid:boolean //if the title input is valid or not
 	//public title:string //the task title
 	titleInput:FormControl =  new FormControl('', [Validators.required, Validators.maxLength(40)])
 
	//Dependencies injection
 constructor( public dialogRef: MatDialogRef<EditTaskDialogComponent>, private fb: FormBuilder ) { }


 //Methods

 checkTitleInput():boolean {
 	return this.titleInput.hasError('maxlength') && this.titleInput.dirty
 }
 //if press the cancel button method
  onNoClick():void {
  	this.dialogRef.close()
  }

 
  //check if the input is valid or not
/*  checkInvalid(invalid):void{
  	this.invalid = invalid
  }
  //get the task title from the app-title-input component
  getTitle(title):void {
  	this.title = title
  }*/

 

}
