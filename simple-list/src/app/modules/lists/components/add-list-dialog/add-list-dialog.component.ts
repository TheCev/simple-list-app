import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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
					<button mat-button [mat-dialog-close]="titleInput.value" [disabled]="!titleInput.valid">Add List</button>
				</div>
  `,
  styles: ['']
})

export class AddListDialogComponent {

	titleInput:FormControl = new FormControl('', [Validators.required, Validators.maxLength(40)])
  constructor( public dialogRef: MatDialogRef<AddListDialogComponent> ) { }

  checkMaxLength():boolean {
  	return this.titleInput.hasError('maxlength') && this.titleInput.dirty
  }
  onNoClick = ():void => this.dialogRef.close()

}

