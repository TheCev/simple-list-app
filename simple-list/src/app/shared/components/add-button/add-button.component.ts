import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-button',
  template: `
  <button mat-icon-button>
   <mat-icon color="primary">add_circle</mat-icon>
 </button>`,
  styleUrls: ['./add-button.component.sass']
})

export class AddButtonComponent {

}
