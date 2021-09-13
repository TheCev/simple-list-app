//Angular
import { Component } from '@angular/core';
//Angular material dialog
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  template: `<h1 mat-dialog-title>Delete a List</h1>
				<div mat-dialog-content>Are you sure about delete this list?</div>
			<div mat-dialog-actions>
  				<button mat-button mat-dialog-close >Close</button>
  				<button mat-button [mat-dialog-close]="true" color="warn">Delete</button>
			</div>`,
  styles: ['']
})

export class DeleteDialogComponent {

  constructor( public dialogRef: MatDialogRef<DeleteDialogComponent> ) { }

  
}
