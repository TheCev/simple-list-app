import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-list-dialog',
  template: `
  			<h2 mat-dialog-title>Edit a List</h2>
			<div mat-dialog-content>

				<mat-form-field>
					<input matInput #title placeholder="Insert New Title">
				</mat-form-field>

			</div>
			<div mat-dialog-actions>
				<button mat-button (click)="onNoClick()">Cancel</button>
					<button mat-button [mat-dialog-close]="title.value" >Edit</button>
				</div>
  `,
  styles: ['']
})

export class EditListDialogComponent {

  constructor( public dialogRef: MatDialogRef<EditListDialogComponent> ) { }

  onNoClick = ():void => this.dialogRef.close()

}