//Angular
import { Component } from '@angular/core';
//material components
import { MatDialogRef } from '@angular/material/dialog';
//forms
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-list-dialog',
  template: `
  			<h2 mat-dialog-title>Change the username</h2>
			<div mat-dialog-content>
				<mat-form-field>
					<input matInput [formControl]="usernameInput" placeholder="username">
				</mat-form-field>
				<mat-error *ngIf="checkMaxLength()">Username cannot be more than 30 characters</mat-error>
			</div>
			<div mat-dialog-actions>
				<button mat-button (click)="onNoClick()">Cancel</button>
					<button mat-button [mat-dialog-close]="usernameInput.value" [disabled]="!usernameInput.valid">Add</button>
				</div>
  `,
  styles: ['']
})

export class ChangeUsernameDialogComponent {

	//Properties

	//title input, with validators
	usernameInput:FormControl = new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(6)])

	//Dependencies injection
  constructor( public dialogRef: MatDialogRef<ChangeUsernameDialogComponent> ) { }

  //Methods
  
  //verify if have more than 40 characters, then show an error
  checkMaxLength():boolean {
  	return this.usernameInput.hasError('maxlength') && this.usernameInput.dirty
  }
  //if the cancel button is pressed
  onNoClick = ():void => this.dialogRef.close()

}
