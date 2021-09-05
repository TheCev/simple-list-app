import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AddListDialogComponent } from '../../../routes/lists/add-list-dialog/add-list-dialog.component'
@Component({
  selector: 'app-add-button',
  template: `
  <button mat-icon-button (click)="openDialog()">
   <mat-icon color="primary">add_circle</mat-icon>
 </button>`,
  styleUrls: ['./add-button.component.sass']
})
export class AddButtonComponent implements OnInit {

  constructor(
  	public dialog:MatDialog
  	) { }

  ngOnInit(): void {
  }
  @Input() listId:number;
 @Output() newList = new EventEmitter
  openDialog():void {
  const dialogRef = this.dialog.open(AddListDialogComponent,{
    width:'300px'
  })

  dialogRef.afterClosed().subscribe((result:string) =>{
    const listTitle = result
   this.newList.emit(listTitle)

  })
}

}
