//Angular
import { Component } from '@angular/core';
//material components
import { MatDialogRef } from '@angular/material/dialog';
//forms
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-list-dialog',
  template: `
  			<h2 mat-dialog-title>Change the Email</h2>
			<div mat-dialog-content>
				<mat-form-field>
					<input matInput [formControl]="emailInput" placeholder="Email">
				</mat-form-field>
				<mat-error *ngIf="checkEmail()">Insert a valid email</mat-error>
			</div>
			<div mat-dialog-actions>
				<button mat-button (click)="onNoClick()">Cancel</button>
					<button mat-button [mat-dialog-close]="emailInput.value" [disabled]="!emailInput.valid">Add</button>
				</div>
  `,
  styles: ['']
})

export class ChangeEmailDialogComponent {

	//Properties

	//title input, with validators
	 emailInput:FormControl = new FormControl('', [Validators.email, Validators.required])

	//Dependencies injection
  constructor( public dialogRef: MatDialogRef<ChangeEmailDialogComponent> ) { }

  //Methods


  //verify if the email if valid
    checkEmail():boolean {

    return this.emailInput.hasError('email') && this.emailInput.dirty
  }
  
  //if the cancel button is pressed
  onNoClick = ():void => this.dialogRef.close()

}
