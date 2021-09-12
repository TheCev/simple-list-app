import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  template:`
  				<mat-list-option selected="{{item.state}}" >
					{{item.title}}
					this is a component
				</mat-list-option>`,
  styleUrls: ['./list-item.component.sass']
})
export class ListItemComponent {
	@Input() item;

}
