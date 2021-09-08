import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-options-button',
  template: `
  		<button mat-icon-button [matMenuTriggerFor]="menu">
          <mat-icon>more_horiz</mat-icon>
        </button>

        <mat-menu #menu="matMenu">
            <button mat-menu-item color="warn" (click)="onEdit()">
  				<mat-icon>create</mat-icon>
  				<span>Edit</span>
  			</button>
  			<button mat-menu-item color="warn" (click)="onDelete()">
  				<mat-icon>delete_outlined</mat-icon>
  				<span>Delete</span>
  			</button>
        </mat-menu>
  `,
  styles: ['']
})
export class OptionsButtonComponent  {
  @Output() deleteItem = new EventEmitter
  @Output()  editItem = new EventEmitter
  @Input() itemId:number

  onDelete():void{
    this.deleteItem.emit(this.itemId)
  }

  onEdit():void {
    this.editItem.emit(this.itemId)
  }

}
