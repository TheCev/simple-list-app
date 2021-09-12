import { Component } from '@angular/core';
import { ListService } from 'src/app/modules/lists/services/list.service';

@Component({ 
  selector: 'app-lists',
  template:`

<div class="container">
  <h2 class="subtitle">To Do Lists </h2>
    
  <app-list></app-list>

</div>

  `,
  styleUrls: ['./lists.component.sass']
})

export class ListsComponent {

  constructor( private listSvc:ListService ) { }

  handleAddList():void{
    this.listSvc.sendAddListEvent()
  }

}
