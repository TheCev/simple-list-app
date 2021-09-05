import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-list-dialog',
  template: `
  			<h2 mat-dialog-title>Create a New To Do List</h2>
			<div mat-dialog-content>

				<mat-form-field>
					<input matInput #title placeholder="Title">
				</mat-form-field>

			</div>
			<div mat-dialog-actions>
				<button mat-button (click)="onNoClick()">Cancel</button>
					<button mat-button [mat-dialog-close]="title.value" >Add</button>
				</div>
  `,
  styles: ['']
})

export class AddListDialogComponent {

  constructor( public dialogRef: MatDialogRef<AddListDialogComponent> ) { }

  onNoClick = ():void => this.dialogRef.close()

}

