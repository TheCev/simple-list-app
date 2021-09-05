import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task-dialog',
  template: `
	<h2 mat-dialog-title>Create a New Task</h2>
		<div mat-dialog-content>

		<mat-form-field>
			<input matInput #title placeholder="Title">
		</mat-form-field>

		</div>
		<div mat-dialog-actions>
			<button mat-button (click)="onNoClick()">Cancel</button>
			<button mat-button [mat-dialog-close]="title.value" >Add</button>
		</div>`,
  styles: ['']
})

export class AddTaskDialogComponent {

 constructor( public dialogRef: MatDialogRef<AddTaskDialogComponent> ) { }


  onNoClick():void {
  	this.dialogRef.close()
  }

}
