//Angular
import { Component } from '@angular/core';
//material component
import { MatDialogRef } from '@angular/material/dialog';
//forms
import {FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-edit-list-dialog',
  template: `
  			<h2 mat-dialog-title>Edit a List</h2>
			<div mat-dialog-content>

				<mat-form-field>
					<input matInput [formControl]="titleInput" placeholder="Insert New Title">
				</mat-form-field>
				<mat-error *ngIf="checkMaxLength()">The List Title cannot be more than 40 characters</mat-error>

			</div>
			<div mat-dialog-actions>
				<button mat-button (click)="onNoClick()">Cancel</button>
					<button mat-button [mat-dialog-close]="titleInput.value" [disabled]="!titleInput.valid" >Edit</button>
				</div>
  `,
  styles: ['']
})

export class EditListDialogComponent {

	//Properties

	//input
	titleInput:FormControl = new FormControl('', [Validators.required, Validators.maxLength(40)])

	//Dependencies Injection
	constructor( public dialogRef: MatDialogRef<EditListDialogComponent> ) { }

	//Methods

	//if the length of the input is more than 40 characters show a  message
	checkMaxLength():boolean {
		return this.titleInput.hasError('maxlength') && this.titleInput.dirty
	}
	//if the cancel button is pressed, close the dialog
	onNoClick = ():void => this.dialogRef.close()
  

}