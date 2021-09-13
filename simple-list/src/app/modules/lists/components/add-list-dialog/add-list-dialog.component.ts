//Angular
import { Component } from '@angular/core';
//material components
import { MatDialogRef } from '@angular/material/dialog';
//forms
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-list-dialog',
  template: `
  			<h2 mat-dialog-title>Create a New To Do List</h2>
			<div mat-dialog-content>
				<mat-form-field>
					<input matInput [formControl]="titleInput" placeholder="Insert List Title">
				</mat-form-field>
				<mat-error *ngIf="checkMaxLength()">The List Title cannot be more than 40 characters</mat-error>
			</div>
			<div mat-dialog-actions>
				<button mat-button (click)="onNoClick()">Cancel</button>
					<button mat-button [mat-dialog-close]="titleInput.value" [disabled]="!titleInput.valid">Add</button>
				</div>
  `,
  styles: ['']
})

export class AddListDialogComponent {

	//Properties

	//title input, with validators
	titleInput:FormControl = new FormControl('', [Validators.required, Validators.maxLength(40)])

	//Dependencies injection
  constructor( public dialogRef: MatDialogRef<AddListDialogComponent> ) { }

  //Methods
  
  //verify if have more than 40 characters, then show an error
  checkMaxLength():boolean {
  	return this.titleInput.hasError('maxlength') && this.titleInput.dirty
  }
  //if the cancel button is pressed
  onNoClick = ():void => this.dialogRef.close()

}

